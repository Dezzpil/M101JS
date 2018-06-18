var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1/school', function(err, db) {

    var cursor = db.collection("grades").find({});
    cursor.skip(6);
    cursor.limit(2);
    cursor.sort({"grade": 1});

    cursor.forEach(function(doc) {
        console.log(doc._id, doc.student);
    }, function(err) {
        db.close();
    })

});
