/**
 * Created by cjpowers on 6/13/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 3000;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Product = require('./models/Product');
var productCtrl = require('./controllers/productCtrl');

mongoose.connect('mongodb://localhost/products', function(err){
    console.log(err);
})

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());




app.post('/api/products', productCtrl.create);

app.get('/api/products', productCtrl.index);

app.get('/api/products/:id', productCtrl.get);

app.put('/api/products/:id', productCtrl.update);

app.delete('/api/products/:id', productCtrl.destroy);

app.listen(port, function(){
    console.log('Listening on port ', port);
})

