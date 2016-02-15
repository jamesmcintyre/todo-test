'use strict';

var app = angular.module('todoList');

app.controller('homeCtrl', function($scope, $state, TaskSvc) {
  // console.log('Hello from homeCtrl!');

  $scope.editing = false;

  getTasks();

  function getTasks(){
    TaskSvc.getTasks()
    .then(function(res){
      // console.log('get response', res);
      $scope.tasksList = res.data;
    }, function(err){
      // console.log(err);
    });
  }


  $scope.addTask = function(task){
    TaskSvc.addTask(task)
    .then(function(res){
      // console.log('add task response: ',res);
      getTasks();
      $scope.task = {};
    }, function(err){
      // console.log(err);
    });
  }


  $scope.editTask = function(task){
    $scope.task = task;
    $scope.editing = true;

  }


  $scope.updateTask = function(task){
    TaskSvc.updateTask(task)
    .then(function(res){
      // console.log('update task response: ',res);
      getTasks();
      if($scope.editing) $scope.editing = false;
      $scope.task = {};
    }, function(err){
      // console.log(err);
    });
  }



  $scope.toggleStatus = function(task){

    // console.log(task.status);
    task.status = !task.status;
    // console.log(task.status);

    if(task.status){
      task.checked = 'checked';
    }
    else{
      task.checked = '';
    }

    TaskSvc.updateTask(task)
    .then(function(res){
      // console.log('toggle task response: ',res);
      // getTasks();
    }, function(err){
      // console.log(err);
    });
  }

  $scope.removeTask = function(task){
    // console.log('remove task...');
    TaskSvc.removeTask(task)
    .then(function(res){
      // console.log('remove task response: ',res);
      getTasks();
    }, function(err){
      // console.log(err);
    });
  }



});
