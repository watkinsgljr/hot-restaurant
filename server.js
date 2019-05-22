// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 3000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/survey":
            return renderSurveyPage(req, res);
        default:
            return renderWelcomePage(req, res);
    }
}


// Starts our server.
server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});