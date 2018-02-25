'use strict';

/**
 * @ngdoc function
 * @name hackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackApp
 */
angular.module('hackApp')
  .controller('MainCtrl', function ($scope,$resource,$http,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.abc = "text";
    $scope.zipCode = "60616";
    $scope.name = null;
    $scope.gender = null;
    $scope.age = null;
    $scope.sourceCity = null;
    $scope.sourceZipCode = null;
    $scope.destinationCity = null;
    $scope.destinationZipCode = null;
    $scope.flightNumber = null;
    $scope.departureDate = null;
    $scope.arrivalDate = null;
    // var Weather = $resource('api.openweathermap.org/data/2.5/forecast?zip=60616&APPID=9c8e3a6d6f23e6fa92ad1c8265f49868');
    // var weather = Weather.query(function(){
    //     $scope.weatherResponse = weather;
    //     console.log($scope.weather);
    // });
    $scope.copyDataToRootScope = function print(){
      console.log($scope.destinationZipCode);
      $rootScope.destinationZipCode = $scope.destinationZipCode;           
      $rootScope.zipCode = $scope.zipCode;
      $rootScope.name = $scope.name;
      $rootScope.gender = $scope.gender;
      $rootScope.age = $scope.age; 
      $rootScope.sourceCity = $scope.sourceCity;  
      $rootScope.sourceZipCode = $scope.sourceZipCode; 
      $rootScope.destinationCity = $scope.destinationCity ;
      $rootScope.destinationZipCode = $scope.destinationZipCode; 
      $rootScope.flightNumber = $scope.flightNumber; 
      $rootScope.departureDate = $scope.departureDate;
      $rootScope.arrivalDate = $scope.arrivalDate;
    }
    
  }

   


);
