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




});
