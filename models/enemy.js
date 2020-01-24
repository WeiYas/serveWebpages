'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var enemySchema = new Schema({

 name: {
    type: String,
    required: true, 
    index: {unique:true}
 },

 health:{
     type: Number
     
 },

 positionX:{
     type: Number

 },

 positionY:{
     type: Number
 }

});

module.exports = mongoose.model('Enemy', enemySchema);