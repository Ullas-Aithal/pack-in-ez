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
    $scope.flag = 0;
    $scope.maleFlag = 0;
    $scope.childrenFlag = 0;
    $scope.femaleFlag = 0;
    $scope.showMalePanel = 0;
    $scope.showFemalePanel = 0;
    $scope.showChildrenPanel = 0;
    $scope.showToileteries = 0;
    $scope.showMustCarry = 0;
    $scope.showGeneral = 0;
    $scope.selectedWeather = 0;
    if($rootScope.gender == "male"){
      $scope.maleFlag = 1;
    }
    else if($rootScope.gender == "female"){
      $scope.femaleFlag = 1;
    }
    else if(Number($rootScope.age) <= 18){
      $scope.childrenFlag = 1;
    }

    $scope.toggleMale = function(){
        $scope.showMalePanel = !($scope.showMalePanel);
    }
    $scope.toggleFemale = function(){
      $scope.showFemalePanel = !($scope.showfemalePanel);
    }
    $scope.toggleChildren = function(){
      $scope.showChildrenPanel = !($scope.showChildrenPanel);
    }
    $scope.toggleToileteries = function(){
      $scope.showToileteries = !($scope.showToileteries);
      console.log("Tooiletreies", $scope.showToileteries);
    }
    $scope.toggleMustCarry = function(){
      $scope.showMustCarry = !($scope.showMustCarry);
    }
    $scope.toggleGeneral = function(){
      $scope.showGeneral = !($scope.showGeneral);
    }
    $scope.selectWeather = function(selectedW){
      $scope.selectedWeather = selectedW;
      console.log("Selected Weather", $scope.selectedWeather);
    }
    

    $http({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://api.openweathermap.org/data/2.5/forecast?zip=' + $rootScope.destinationZipCode+ '&units=imperial&APPID=9c8e3a6d6f23e6fa92ad1c8265f49868'
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
        
      }, function errorCallback(response) {
        console.log("failed",response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      console.log("Male", $rootScope.gender);
      
              

    

  });
