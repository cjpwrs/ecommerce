/**
 * Created by cjpowers on 6/14/16.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Product = require('../models/Product');

module.exports = {
    create: function(req, res, next){
        var product = new Product(req.body);
        product.save(function(err, p){
            if(!err){
                res.json(p);
            } else res.json(err);
        })
    },
    index: function(req, res, next){
        Product.find(req.query, function(err, products){
            if(!err){
                res.json(products);
            }
        })
    },
    get: function(req, res, next){
        Product.findOne({_id: ObjectId(req.params.id)}, function(err, products){
            if(!err){
                res.json(products);
            } else res.json(err);
        })
    },
    update: function(req, res, next){
        Product.update({_id: ObjectId(req.params.id)}, {$set:req.body}, function(err, products){
            if(!err) res.json(products);
            else res.json(err);
        })
    },
    destroy: function(req, res, next){
        Product.remove({_id: ObjectId(req.params.id)}, function(err, response){
            if(!err)
                res.json(response);
            else
                res.json(err);
        })
    }
}