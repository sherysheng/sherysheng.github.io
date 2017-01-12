var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/foods', {
            templateUrl : '/templates/foods.html',
            controller  : 'FoodController'
        })

})

app.controller("FoodController", function($scope, $routerParams){
    console.log("welcome to foodie world");//
})