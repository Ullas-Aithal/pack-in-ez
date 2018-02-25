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
    // var Weather = $resource('api.openweathermap.org/data/2.5/forecast?zip=60616&APPID=9c8e3a6d6f23e6fa92ad1c8265f49868');
    // var weather = Weather.query(function(){
    //     $scope.weatherResponse = weather;
    //     console.log($scope.weather);
    // });

    
   $rootScope.zipCode = $scope.zipCode;
  }

   


);
