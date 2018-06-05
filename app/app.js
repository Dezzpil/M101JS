let http = require('http');
let assert = require('assert');
let MongoClient = require('mongodb').MongoClient;


let server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});


    MongoClient.connect('mongodb://mongo:27017/video', function(err, db) {

        if (err === null) {
            db.close();
            res.end("Successfully connected to server\n");
        }

        res.end(err.toString() + "\n");


        // db.collection('movies').find({}).toArray(function(err, docs) {
        //
        //     docs.forEach(function(doc) {
        //         console.log(doc.title);
        //     });
        //
        //     db.close();
        // });

        // console.log("Called find()");
    });

});

server.listen(8000);

console.log('Server is running...');