'use strict';


app.service('TaskSvc', function($http, $state){

  //ADD TASK
  this.addTask = function(newTask){
    return $http.post('/tasks/', newTask)
  }


  this.getTasks = function(){
    return $http.get('/tasks/')
  }




});
