var express = require('express');
var router = express.Router();


var Task = require('../models/task');


router.post('/', function(req, res, next) {
  Task.addTask(req,res, function(err, addedTask){
    res.status(err ? 400 : 200).send(err || addedTask);
  });
});


router.get('/', function(req, res, next) {
  Task.find({}, function(err, tasks){
    if(err) res.status(400).send(err);
    res.send(tasks);
  })
});


router.delete('/:taskId', function(req, res, next){
  Task.deleteTask(req.params.taskId, function(err){
    res.status(err ? 400 : 200).send(err || 'Task deleted.');
  });
});

router.post('/:taskId', function(req, res, next){
  Task.update(req.params.taskId, function(err){
    res.status(err ? 400 : 200).send(err || 'Task updated.');
  });
});


module.exports = router;
