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
bankApp.service('ApiService', ['$resource', '$q', function($resource, $q){
    var vm = this;
 
    vm.getApi = function(_city) {

        return $q(function(resolve, reject) {

            var resObj = $resource("https://api.fyle.in/api/bank_branches");
            var resp = resObj.query({city:_city,offset: 0,limit:50});
            resp.$promise.then(function(data){
                   console.log('Got data');
                   vm.data = data;
                   console.log(data);
                   resolve('success')
                 },function(err){
                    console.log(err);
                    console.log('error');
                    reject('bjfshgfkj')
            });
        })
    // console.log($scope.bankResult);

    }
    vm.getBankData = function(){
        return vm.data;
    }
}]);


// CONTROLLERS
bankApp.controller('homeController', ['$scope','cityService','ApiService', function($scope,cityService,ApiService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;

    });
   
    $scope.selectCity = ['BANGALORE','DELHI', 'MUMBAI','KOLKATA', 'CHANDIGARH','LUCKNOW','HYDERABAD','COCHIN','PUNE','JAIPUR'];
     ApiService.getApi($scope.city)
    .then(function(result) {
        $scope.bankData = ApiService.getBankData();
        
    })
}]);

bankApp.controller('bankController', ['$scope','$resource','cityService','ApiService', function($scope,$resource,cityService,ApiService){
    $scope.city = cityService.city;
   ApiService.getApi($scope.city)
    .then(function(result) {
        $scope.bankData = ApiService.getBankData();
        
    })

}]);