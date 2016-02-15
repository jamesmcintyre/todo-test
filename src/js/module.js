'use strict';

var app = angular.module('todoList', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl' })
  $urlRouterProvider.otherwise('/');
});
