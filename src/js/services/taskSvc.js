'use strict';


app.service('TaskSvc', function($http, $state){

  //ADD TASK
  this.addTask = function(newTask){
    return $http.post('/tasks/', newTask)
  }


  this.getTasks = function(){
    return $http.get('/tasks/')
  }


  this.updateTask = function(task){
    var taskId = task._id;

    return $http.post(`/tasks/${taskId}`, task)
  }


  this.removeTask = function(task){
    var taskId = task._id;

    return $http.delete(`/tasks/${taskId}`)
  }


});
