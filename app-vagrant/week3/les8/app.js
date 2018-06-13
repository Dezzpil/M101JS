var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect("mongodb://127.0.0.1:27017/school", function(err, db) {

    assert.equal(err, null);

    var cursor = db.collection("grades").find({});
    cursor.sort({"grade": -1});
    cursor.skip(4);
    cursor.limit(2);

    var num = 0;

    cursor.forEach(
        function(doc) {
            console.log(doc);
            num++;
        }, function(err) {
            console.log("Found:" + num);
            db.close();
        }
    );

});

