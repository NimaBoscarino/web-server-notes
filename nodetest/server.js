var http = require('http')

var port = 10000

var server = http.createServer(function (req, res) {
    // console.log("METHOD", req.method) // on a request, console.log it
    // console.log("URL", req.url) // on a request, console.log it

    if (req.url == "/" && req.method == "GET") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({a: 1, b: 2, c: 3}));
    } else if (req.url == '/cat' && req.method == "GET") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'cats!'}));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: "I don't know what you're looking for."}));
    }
})

server.listen(port, function() {
    console.log("LISTENING ON " + port)
})