import std/asynchttpserver
import std/asyncdispatch
import std/browsers
import std/strutils
import std/uri

import requestHandler/launchTestGame
import requestHandler/resources

var servAddr = (host: "127.0.0.1", port: 8080)
# NOTE: DO NOT CHANGE HOST TO ANYTHING OTHER THAN 127.0.0.1
# THIS PROGRAM ISNT MEANT FOR PRODUCTION USE
# IT IS HIGHLY VULNERABLE TO ANYTHING

echo "[-] WARNING: DO NOT RUN THIS IN PUBLIC CONTEXT, THIS SERVER WASNT MEANT FOR PRODUCTION USE, IF YOU DON'T HOST IT IN LOCALHOST YOU WILL BE RESPONSIBLE FOR WHATEVER HAPPENS"
echo "[-] ALSO IF YOU WANNA TEST MAP, MAKE SURE TO SET 'EXPB2' ENVIRONMENT VARIABLE TO YOUR CLIENT DIRECTORY"

# Handles incoming HTTP request from client
proc requestHandler(req: Request) {.async.} =
    # Launch the game with the custom map
    if req.url.path == "/test_map.php":
        discard launchTestGame(req)
        return
    
    # Normal ALE resources fetching
    retrieveResources(req)

# START
proc main {.async.} =
    var server = newAsyncHttpServer()

    server.listen(Port(servAddr.port), servAddr.host)
    echo "[-] Listening in " & servAddr.host & ":" & $servAddr.port
    openDefaultBrowser("http://" & servAddr.host & ":" & $servAddr.port & "/map_edit.php.html")
    while true:
        if server.shouldAcceptRequest():
            await server.acceptRequest(requestHandler)
        else:
            await sleepAsync(500)

waitFor main()