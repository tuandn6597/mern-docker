const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;
var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://db:27017',{useNewUrlParser:true,useUnifiedTopology: true}, function (err, db) {
    //neu ket noi khong thanh cong thi in ra loi
    if (err) throw err;
    //neu thanh cong thi log ra thong bao
    console.log('Ket noi thanh cong');
    const database = db.db('test')

    const collection = database.collection('dogs')
    collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {
        console.log(result);
    })
    
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/users', function(req, res) {
    res.json([
        "Dặng Ngọc Tuấn",
        "Nguyễn Trung Nghĩa"
    ]);
});

app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT);
});