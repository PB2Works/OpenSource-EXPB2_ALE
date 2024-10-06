import std/asynchttpserver
import std/asyncdispatch

proc retrieveResources*(req: Request) {.async.} =
    try:
        var mime = "";
        var path = req.url.path;
        if path.len() >= 3 and path[^3..^1] == ".js":
            mime = "text/javascript"
        await req.respond(200.HttpCode, ("." & path).readFile, newHttpHeaders({"Content-Type": mime}))
    except CatchableError:
        await req.respond(404.HttpCode, req.url.path)
        echo "[+] NotFound: " & req.url.path