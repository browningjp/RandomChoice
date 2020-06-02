// Load in choices
var choices = require("./" + process.env.CHOICES);

// load in http module
var http = require('http');

// set port to listen on (default 8080)
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

// respond to each request with a random choice from the list
var server = http.createServer(function (request, response) {
    var choice = choices[Math.floor(Math.random() * choices.length)];
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(choice);
    console.log(choice);
});

// start listening
server.listen(port);
