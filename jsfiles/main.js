var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/foods', {
            templateUrl : '/templates/photos.html',
            controller  : 'FoodController'
        })
})

app.controller("FoodController", function($scope, $routerParams){
    console.log("welcome to foodie world");
})