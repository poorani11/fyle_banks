// MODULE
var bankApp = angular.module('bankApp', ['ngRoute', 'ngResource']);

// ROUTES
bankApp.config(function ($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/bank', {
        templateUrl: 'pages/bank.html',
        controller: 'bankController'
    })
});


// CONTROLLERS
bankApp.controller('homeController', ['$scope', function($scope){

}]);

bankApp.controller('bankController', ['$scope', function($scope){

}]);