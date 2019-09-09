const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;
var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://db:27017', function (err, db) {
    //neu ket noi khong thanh cong thi in ra loi
    if (err) throw err;
    //neu thanh cong thi log ra thong bao
    console.log('Ket noi thanh cong');
    const database = db.db('test')

    const collection = database.collection('dogs')
    collection.find().toArray((err, items) => {
    console.log(items)
    })
});



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/users', function(req, res) {
    res.json([
        "Sally",
        "Bernie",
        "Robbie",
    ]);
});

app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT);
});