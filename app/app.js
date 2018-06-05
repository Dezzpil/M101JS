let http = require('http');

let server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, Cruel World!\n");
});

server.listen(8000);

console.log('Server is running...');