'use strict'

var mongoose = require('mongoose');
var moment = require('moment');

//TASK SCHEMA
var taskSchema = mongoose.Schema({
  description: { type: String},
  status: {type: Boolean}
});


//ADD TASK METHOD

taskSchema.statics.addTask = function(addReq, cb){

  var reqBody = addReq.body;






}
