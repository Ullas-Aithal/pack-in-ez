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
    $scope.gender = "Select";
    $scope.age = null;
    $scope.sourceCity = null;
    $scope.sourceZipCode = null;
    $scope.destinationCity = null;
    $scope.destinationZipCode = null;
    $scope.flightNumber = null;
    $scope.departureDate = null;
    $scope.arrivalDate = null;
    $scope.status = 0;
    $scope.flightNumbers = [];
    $scope.selectedFlight = "Select a flight from the list";
    $scope.searched = 1;
    $scope.pressed = 0;
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
      $rootScope.selectedFlight = $scope.selectedFlight;
    }



    $scope.getFlights = function(){

      $scope.status = 1;
    $http({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=TlxyNRn5PAJrZKgHPKcEiANnnTVhs7vL&origin=' + $scope.sourceCity + '&destination=' + $scope.destinationCity + '&departure_date=' + $scope.departureDate
    }).then(function successCallback(response) {

      response.data["results"].forEach(element => {
        if(element["itineraries"][0]["outbound"]["flights"][0]["flight_number"] != "")
        {
          $scope.flightNumbers.push(element["itineraries"][0]["outbound"]["flights"][0]["flight_number"]);
          console.log("flight id", element["itineraries"][0]["outbound"]["flights"][0]["flight_number"]);
          $scope.flightNumbers = [...new Set($scope.flightNumbers)];
        }
      });
        
        console.log(response.data);

        $scope.status = 0;
        $scope.searched = 0;
        $scope.pressed = 1;
        
      }, function errorCallback(response) {
        console.log("failed",response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });



    
  }
  $scope.setSelectedFlight = function(flight){
    $scope.selectedFlight = flight;
  }

  $scope.selectGender = function(gender){
    $scope.gender = gender;
    console.log("Gender",gender);
  }

   

  }

  


);
