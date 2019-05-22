var http = require("http");
var fs = require("fs");

var PORT = 3000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/survey":
            return renderReservePage(req, res);
        default:
            return renderWelcomePage(req, res);
    }
}

function renderWelcomePage(req, res) {
    fs.readFile(__dirname + "/app/public/home.html", function (err, data) {
        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/html"
            });
            res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
        } else {
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        }
    });
}

function renderReservePage(req, res) {
    fs.readFile(__dirname + "/app/public/survey.html", function (err, data) {
        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/html"
            });
            res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
        } else {
            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        }
    });

}

// Starts our server.
server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});