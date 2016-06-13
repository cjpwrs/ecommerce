/**
 * Created by cjpowers on 6/13/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var cors = require('cors');
var port = 3000;
var ObjectId = mongojs.ObjectId

var db = mongojs('ecommerce');
var productsCollection = db.collection('products');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.post('/api/products', function(req, res, next){
    var product = req.body;
    productsCollection.insert(product, function(err, p){
        if(!err){
            res.json(p);
        }
    })
})

app.get('/api/products', function(req, res, next){
    productsCollection.find(req.query, function(err, products){
        if(!err){
            res.json(products);
        }
    })
})

app.get('/api/products/:id', function(req, res, next){
    productsCollection.findOne({_id: ObjectId(req.params.id)}, function(err, products){
        if(!err){
            res.json(products);
        }
    })
})

app.put('/api/products/:id', function(req, res, next){
    productsCollection.update({_id: ObjectId(req.params.id)}, req.body, function(err, products){
        res.json(products);
    })
})

app.delete('/api/products/:id', function(req, res, next){
    productsCollection.remove({_id: ObjectId(req.params.id)}, function(err, response){
        res.json(response);
    })
})

app.listen(port, function(){
    console.log('Listening on port ', port);
})

