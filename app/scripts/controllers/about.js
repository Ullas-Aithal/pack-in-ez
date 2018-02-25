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
    $scope.status = 1;
    $scope.menClothes = [];
    $scope.menToiletries = [];
    $scope.menEssentials = [];
    $scope.womenClothes = [];
    $scope.womenToiletries = [];
    $scope.womenEssentials = [];
    $scope.commonClothes = [];
    $scope.commonToiletries = [];
    $scope.commonMustCarry = [];
    $scope.menReq = [
      {
        "Clothing": "Undershirts",
        "Toiletries": "Toothbrush and toothpaste/tooth powder",
        "Essentials": "Plane tickets"
      },
      {
        "Clothing": "Underwear",
        "Toiletries": "Floss",
        "Essentials": "Driver’s license"
      },
      {
        "Clothing": "Pajamas",
        "Toiletries": "Mouthwash",
        "Essentials": "Passport"
      },
      {
        "Clothing": "Socks",
        "Toiletries": "Comb",
        "Essentials": "Camera"
      },
      {
        "Clothing": "T-shirts",
        "Toiletries": "Brylcreeme",
        "Essentials": "Sunglasses"
      },
      {
        "Clothing": "Dress shirts",
        "Toiletries": "Shave soap",
        "Essentials": "Prescription medicine"
      },
      {
        "Clothing": "Dress slacks",
        "Toiletries": "Razor",
        "Essentials": ""
      },
      {
        "Clothing": "Suit/Sport coat",
        "Toiletries": "Brush",
        "Essentials": ""
      },
      {
        "Clothing": "Jeans/Khakis",
        "Toiletries": "Shampoo (or a shampoo bar if you want to avoid the hassle of airport security)",
        "Essentials": ""
      },
      {
        "Clothing": "Dress shoes",
        "Toiletries": "Soap",
        "Essentials": ""
      },
      {
        "Clothing": "Tennis shoes",
        "Toiletries": "Deodorant",
        "Essentials": ""
      },
      {
        "Clothing": "Tie",
        "Toiletries": "",
        "Essentials": ""
      },
      {
        "Clothing": "Belt",
        "Toiletries": "",
        "Essentials": ""
      }
     ];

     $scope.womenReq = [
      {
        "Clothing": "Sunglasses",
        "Toiletries": "Sun-tan lotion",
        "Essentials": "Plane tickets"
      },
      {
        "Clothing": "Socks",
        "Toiletries": "Single pack of laundry soap",
        "Essentials": "Driver’s license"
      },
      {
        "Clothing": "Underwear",
        "Toiletries": "Lip balm",
        "Essentials": "Passport"
      },
      {
        "Clothing": "Dirty-clothes bag",
        "Toiletries": "All meds (allergy, potential disease, ibuprofen)",
        "Essentials": "Camera"
      },
      {
        "Clothing": "Tennis shoes",
        "Toiletries": "Shampoo, face wash,",
        "Essentials": "Sunglasses"
      },
      {
        "Clothing": "Casual shoes",
        "Toiletries": "Lotion",
        "Essentials": "Prescription medicine"
      },
      {
        "Clothing": "Flip flops",
        "Toiletries": "Razor",
        "Essentials": ""
      },
      {
        "Clothing": "Pajamas",
        "Toiletries": "Deodorant",
        "Essentials": ""
      },
      {
        "Clothing": "Long-sleeve undershirt",
        "Toiletries": "Hair brush, hair gel",
        "Essentials": ""
      },
      {
        "Clothing": "Tank tops to layer",
        "Toiletries": "Washcloth, medium towel",
        "Essentials": ""
      },
      {
        "Clothing": "Light jacket/rain jacket",
        "Toiletries": "Earplugs",
        "Essentials": ""
      },
      {
        "Clothing": "Cotton shirts",
        "Toiletries": "Makeup",
        "Essentials": ""
      },
      {
        "Clothing": "Jeans",
        "Toiletries": "Feminine items",
        "Essentials": ""
      },
      {
        "Clothing": "Light-weight pants or shorts",
        "Toiletries": "",
        "Essentials": ""
      }
     ];






     $scope.menReq.forEach(element => {
       if(element["Clothing"] !="")
       $scope.menClothes.push(element["Clothing"]);
       if(element["Toiletries"] !="")
       $scope.menToiletries.push(element["Toiletries"]);
       if(element["Essentials"] !="")
       $scope.menEssentials.push(element["Essentials"]);
     });

     $scope.womenReq.forEach(element => {
      if(element["Clothing"] !="")
      $scope.womenClothes.push(element["Clothing"]);
      if(element["Toiletries"] !="")
      $scope.womenToiletries.push(element["Toiletries"]);
      if(element["Essentials"] !="")
      $scope.womenEssentials.push(element["Essentials"]);
    });
    





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
    $scope.departs_at;
    $scope.arrives_at;
    $scope.aircraft;
    $scope.travel_class;
    $scope.seats_remaining;
    $scope.origin;
    $scope.oTerminal;
    $scope.dest;
    $scope.oDest;
    $scope.operating_airline;    
    if($rootScope.gender == "male"){
      $scope.maleFlag = 1;
      $scope.commonClothes = $scope.menClothes;
      $scope.commonToiletries = $scope.menToiletries;
      $scope.commonMustCarry = $scope.menEssentials;
  
    }
    else if($rootScope.gender == "female"){
      $scope.femaleFlag = 1;
      $scope.commonClothes = $scope.womenClothes;
      $scope.commonToiletries = $scope.womenToiletries;
      $scope.commonMustCarry = $scope.womenEssentials;
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
    }
    $scope.toggleMustCarry = function(){
      $scope.showMustCarry = !($scope.showMustCarry);
    }
    $scope.toggleGeneral = function(){
      $scope.showGeneral = !($scope.showGeneral);
    }
    $scope.selectWeather = function(selectedW){
      $scope.selectedWeather = selectedW;
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
        $scope.getFlights();
      }, function errorCallback(response) {
        console.log("failed",response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    

      $scope.getFlights = function(){
        
              $scope.status = 1 ;
            $http({
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              url: 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=TlxyNRn5PAJrZKgHPKcEiANnnTVhs7vL&origin=' + $rootScope.sourceCity + '&destination=' + $rootScope.destinationCity + '&departure_date=' + $rootScope.departureDate
            }).then(function successCallback(response) {
        
              console.log(response.data);
              response.data["results"].forEach(element => {
                // if(element["itineraries"][0]["outbound"]["flights"][0]["flight_number"] != "")
                // {
                //   $scope.flightNumbers.push(element["itineraries"][0]["outbound"]["flights"][0]["flight_number"]);
                //   console.log("flight id", element["itineraries"][0]["outbound"]["flights"][0]["flight_number"]);
                //   $scope.flightNumbers = [...new Set($scope.flightNumbers)];
                // }
                if(element["itineraries"][0]["outbound"]["flights"][0]["flight_number"] == $rootScope.selectedFlight)
                {
                  var temp = element["itineraries"][0]["outbound"]["flights"][0];
                  $scope.departs_at = temp["departs_at"];
                  $scope.arrives_at = temp["arrives_at"];
                  $scope.aircraft = temp["aircraft"];
                  $scope.travel_class = temp["booking_info"]["travel_class"];
                  $scope.seats_remaining = temp["booking_info"]["seats_remaining"];
                  $scope.origin = temp["origin"]["airport"];
                  $scope.oTerminal = temp["origin"]["terminal"];
                  $scope.dest = temp["destination"]["airport"];
                  $scope.oDest = temp["destination"]["terminal"];
                  $scope.operating_airline  = temp["operating_airline"];


                  console.log("Result", $scope.departs_at + 
                  $scope.arrives_at +
                  $scope.aircraft +
                  $scope.travel_class +
                  $scope.seats_remaining +
                  $scope.origin +
                  $scope.oTerminal +
                  $scope.dest +
                  $scope.oDest +
                  $scope.operating_airline );

                  console.log(element["itineraries"][0]["outbound"]["flights"][0]["flight_number"]);
                }
              });
                
        
                
                $scope.searched = 0;
                $scope.status = 0;
                
              }, function errorCallback(response) {
                console.log("failed",response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        
        
        
            
          }
      
              

    

  });
