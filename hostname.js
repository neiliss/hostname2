// include http module in the file
var http = require('http');
const port = process.argv.slice(2)[0];
var os = require("os");
var hn = os.hostname();
 
// create a server
http.createServer(function (req, res) {
    // http header
    // 200 - is the OK message
    // to respond with html content, 'Content-Type' should be 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write(hn); //write a response to the client
    res.end(); //end the response
}).listen(port); //the server object listens on port 9000
console.log(`service 2 listening on port ${hn} : ${port}`);
