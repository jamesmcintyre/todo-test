'use strict'

var mongoose = require('mongoose');
var moment = require('moment');


var Task;


//TASK SCHEMA
var taskSchema = mongoose.Schema({
  description: { type: String},
  status: {type: Boolean},
  checked: {type: String}
});


//ADD TASK METHOD

taskSchema.statics.addTask = function(addReq, res, cb){

  var reqBody = addReq.body;

  var task = new Task({
    description: reqBody.description,
    status: reqBody.status
  });

  task.save(function(err){
    if(err) return res.status(400).send(err);
    res.send('task saved!');
  });

}


//DELETE TASK

taskSchema.statics.deleteTask = function(taskId, cb){
  Task.findByIdAndRemove(taskId, function(err){
    if(err) return res.status(400).send(err);
    return;
  });
}


//UPDATE TASK

taskSchema.statics.update = function (taskObj, cb) {

  var taskId = taskObj.params.taskId;

  Task.findById(taskId, function(err, task){
    if(err) res.status(400).send(err);
    console.log(task);
    task.description = taskObj.body.description;
    task.status = taskObj.body.status;
    task.checked = taskObj.body.checked;
    task.save(cb);
  });

};


Task = mongoose.model('Task', taskSchema);

module.exports = Task;
