import std/asynchttpserver
import std/os
import std/osproc
import std/tables
import std/strutils
import std/asyncdispatch

proc parseString(a: string): Table[string, string] =
    for pair in a.split("&"):
        var splt = pair.split("=")
        result[splt[0]] = splt[1]

proc mpCreateSanitize(str: string): string =
    return str.replace("&", "[i]").replace("=", "[eq]")

proc launchTestGame*(req: Request) {.async.} =
    var data = req.body.parseString

    var login = data.getOrDefault("l", "")
    var pass = data.getOrDefault("p", "")
    var mapName = data.getOrDefault("mapname", "")
    var MP = data.getOrDefault("mp", "0")
    var IP = data.getOrDefault("m_ip", "")

    var testID = data.getOrDefault("m_id", "_")
    var matchName = data.getOrDefault("m_name", "Test match by " & login)
    var maxPlayers = data.getOrDefault("m_max", "");
    var gameMode = data.getOrDefault("m_gm", "0");
    var ranked = "false";
    var matchPassword = data.getOrDefault("m_pw", "")
    var pingLimit = "5000";
    var mods = "";
    var netcode = "1";

    if existsEnv("EXPB2"):
        #using the / procedure given by path module to standardises slashes in pathing
        var path = "EXPB2".getEnv() / "/Plazma Burst 2 Expanded.exe"

        var args = "?l=" & login
        args.add("&p=" & pass)
        if MP != "0" and testID != "":
            var mp_create = "test:"  & mpCreateSanitize(testID)        & 
                            "|name:" & mpCreateSanitize(matchName)     & 
                            "|map:"  & mpCreateSanitize(mapName)       & 
                            "|max:"  & mpCreateSanitize(maxPlayers)    & 
                            "|gm:"   & mpCreateSanitize(gameMode)      & 
                            "|rnk:"  & mpCreateSanitize(ranked)        & 
                            "|psw:"  & mpCreateSanitize(matchPassword) & 
                            "|ping:" & mpCreateSanitize(pingLimit)     & 
                            "|mods:" & mpCreateSanitize(mods)          & 
                            "|net:"  & mpCreateSanitize(netcode)
            args.add("&mp=1&mp_create=" & mp_create)
        else:
            args.add("&custommap=" & mapName)
        try:
            stdout.writeLine("Testing with: " & args)
            discard startProcess(path, args=[args])
        except Exception as err:
            echo "[-] Error when attempting to test game.\nException raised: " & err.msg
        
    else:
        echo "[-] Env variable EXPB2 doesn't exist, unable to test."
        await req.respond(
            404.HttpCode,
            "Please set the environment variable EXPB2 to the game's folder",
        )

    await req.respond(
        200.HttpCode,
        "",
        newHttpHeaders({"Access-Control-Allow-Origin": "*"})
    )