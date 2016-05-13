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

// SERVICES
bankApp.service('bankService', function(){

    this.bank = "ALLAHABAD BANK";

});


// CONTROLLERS
bankApp.controller('homeController', ['$scope','bankService', function($scope,bankService){
    $scope.bank = bankService.bank;
    $scope.$watch('bank', function(){
        bankService.bank = $scope.bank;

    });

}]);

bankApp.controller('bankController', ['$scope','bankService', function($scope, bankService){
    $scope.bank = bankService.bank;

}]);