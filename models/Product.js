/**
 * Created by cjpowers on 6/14/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('product', productSchema);
