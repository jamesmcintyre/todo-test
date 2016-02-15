'use strict';

var app = angular.module('todoList');

app.controller('homeCtrl', function($scope, $state, TaskSvc) {
  console.log('homeCtrl');



  TaskSvc.getTasks()
  .then(function(res){
    console.log('get response', res);
    $scope.tasksList = res.data;
  }, function(err){
    console.log(err);
  });





  $scope.addTask = function(task){
    TaskSvc.addTask(task)
    .then(function(res){
      console.log('add task response: ',res);
    }, function(err){
      console.log(err);
    });
  }


  $scope.updateTask = function(task){
    TaskSvc.updateTask(task)
    .then(function(res){
      console.log('update task response: ',res);
    }, function(err){
      console.log(err);
    });
  }



  $scope.toggleStatus = function(task){
    
    task.status = !task.status;

    if(task.status){
      task.checked = 'checked';
    }
    else{
      task.checked = '';
    }

    TaskSvc.updateTask(task)
    .then(function(res){
      console.log('toggle task response: ',res);
    }, function(err){
      console.log(err);
    });
  }



});
