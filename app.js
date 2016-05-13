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
bankApp.service('cityService', function(){

    this.city = "BANGALORE";

});


// CONTROLLERS
bankApp.controller('homeController', ['$scope','cityService', function($scope,cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;

    });

}]);

bankApp.controller('bankController', ['$scope','$resource','cityService', function($scope,$resource,cityService){
    $scope.city = cityService.city;
        $scope.bankAPI = $resource("https://api.fyle.in/api/bank_branches");
    $scope.bankResult = $scope.bankAPI.query({city:$scope.city,offset: 0,limit:50});
    $scope.bankResult.$promise.then(function(data){
        console.log('Got data');
        console.log(data);
    },function(err){
        console.log(err);
        console.log('error');
    });
    console.log($scope.bankResult);


}]);