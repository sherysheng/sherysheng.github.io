'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config('$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/foods', {
            templateUrl : '/templates/foods.html',
            //controller  : 'FoodController'
        })
         .otherwise({
                 redirectTo: '/',
             });
});

app.controller("myCtrl", function($scope){
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});