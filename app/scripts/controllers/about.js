'use strict';

/**
 * @ngdoc function
 * @name hackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hackApp
 */
angular.module('hackApp')
  .controller('AboutCtrl', function ($scope, $http, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.weatherDate = [];
    $scope.weatherFaranheit = [];
    $scope.weatherMain = [];
    $scope.weatherDesc = [];
    $scope.weatherPic = [];
    console.log("From Main", $rootScope.zipCode);

    $http({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://api.openweathermap.org/data/2.5/forecast?zip=' + $rootScope.zipCode+ '&units=imperial&APPID=9c8e3a6d6f23e6fa92ad1c8265f49868'
    }).then(function successCallback(response) {
        var prevElement = null;
        response.data["list"].forEach(element => {
          if(prevElement != null){
            
            if(prevElement["dt_txt"].split(' ')[0] != element["dt_txt"].split(' ')[0]){
              
              $scope.weatherDate.push(element["dt_txt"].split(' ')[0]);
              $scope.weatherFaranheit.push(element["main"]["temp"]);
              $scope.weatherMain.push(element["weather"][0]["main"]);
              $scope.weatherDesc.push(element["weather"][0]["description"]);
              $scope.weatherPic.push("http://openweathermap.org/img/w/"+ element["weather"][0]["icon"] + ".png");
    
              prevElement = element;
          }
        }
          else{

            $scope.weatherDate.push(element["dt_txt"].split(' ')[0]);
            $scope.weatherFaranheit.push(element["main"]["temp"]);
            $scope.weatherMain.push(element["weather"][0]["main"]);
            $scope.weatherDesc.push(element["weather"][0]["description"]);
            $scope.weatherPic.push("http://openweathermap.org/img/w/"+ element["weather"][0]["icon"] + ".png");
            prevElement = element;
          }
        });
        console.log("Total Date",$scope.weatherDate);
        console.log("Total Temp",$scope.weatherFaranheit);
        console.log("Total type",$scope.weatherMain);
        console.log("Total Des",$scope.weatherDesc);
      }, function errorCallback(response) {
        console.log("failed",response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  });
