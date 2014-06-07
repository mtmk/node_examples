/*jslint node: true*/
'use strict';

var http = require("http");

var server = http.createServer(function (request, response) {
    console.log('Incoming request ' + request.url);
    
    var headers = {};
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
    response.write("<h1>Hello " + request.url);
    response.end();
});

console.log("Starting server..");
server.listen(3000, '0.0.0.0');
