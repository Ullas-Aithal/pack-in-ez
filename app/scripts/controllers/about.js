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
    $scope.weatherType = null;

    $scope.menClothesSunny = [];
    $scope.menToiletriesSunny = [];
    $scope.menEssentialsSunny = [];
    $scope.womenClothesSunny = [];
    $scope.womenToiletriesSunny = [];
    $scope.womenEssentialsSunny = [];
    
    $scope.menClothesRainy = [];
    $scope.menToiletriesRainy = [];
    $scope.menEssentialsRainy = [];
    $scope.womenClothesRainy = [];
    $scope.womenToiletriesRainy = [];
    $scope.womenEssentialsRainy = [];
    
    $scope.menClothesSnow = [];
    $scope.menToiletriesSnow = [];
    $scope.menEssentialsSnow = [];
    $scope.womenClothesSnow = [];
    $scope.womenToiletriesSnow = [];
    $scope.womenEssentialsSnow = [];
    
    $scope.menClothesAll = [];
    $scope.menToiletriesAll = [];
    $scope.menEssentialsAll = [];
    $scope.womenClothesAll = [];
    $scope.womenToiletriesAll = [];
    $scope.womenEssentialsAll = [];
    
    $scope.commonClothes = [];
    $scope.commonToiletries = [];
    $scope.commonMustCarry = [];
    $scope.menReq = [
      {
        "Clothing": "Undershirts",
        "Toiletries": "Toothbrush and toothpaste/tooth powder",
        "Essentials": "Plane tickets",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Underwear",
        "Toiletries": "Floss",
        "Essentials": "Driver’s license",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Pajamas",
        "Toiletries": "Mouthwash",
        "Essentials": "Passport",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Socks",
        "Toiletries": "Comb",
        "Essentials": "Camera",
        "Weather Type": "All type"
      },
      {
        "Clothing": "T-shirts",
        "Toiletries": "Brylcreeme",
        "Essentials": "Sunglasses",
        "Weather Type": "Sunny"
      },
      {
        "Clothing": "Dress shirts",
        "Toiletries": "Shave soap",
        "Essentials": "Prescription medicine",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Dress slacks",
        "Toiletries": "Razor",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Suit/Sport coat",
        "Toiletries": "Brush",
        "Essentials": "", 
        "Weather Type": "All type"
      },
      {
        "Clothing": "Jeans/Khakis",
        "Toiletries": "Shampoo (or a shampoo bar if you want to avoid the hassle of airport security)",
        "Essentials": "", 
        "Weather Type": "Sunny"
      },
      {
        "Clothing": "Dress shoes",
        "Toiletries": "Soap",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Tennis shoes",
        "Toiletries": "Deodorant",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Tie",
        "Toiletries": "",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Belt",
        "Toiletries": "",
        "Essentials": "",
        "Weather Type": "All type"
      }
     ];

     $scope.womenReq = [
      {
        "Clothing": "Sunglasses",
        "Toiletries": "Sun-tan lotion",
        "Essentials": "Plane tickets",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Socks",
        "Toiletries": "Single pack of laundry soap",
        "Essentials": "Driver’s license",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Underwear",
        "Toiletries": "Lip balm",
        "Essentials": "Passport",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Dirty-clothes bag",
        "Toiletries": "All meds (allergy, potential disease, ibuprofen)",
        "Essentials": "Camera",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Tennis shoes",
        "Toiletries": "Shampoo, face wash,",
        "Essentials": "Sunglasses",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Casual shoes",
        "Toiletries": "Lotion",
        "Essentials": "Prescription medicine",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Flip flops",
        "Toiletries": "Razor",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Pajamas",
        "Toiletries": "Deodorant",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Long-sleeve undershirt",
        "Toiletries": "Hair brush, hair gel",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Tank tops to layer",
        "Toiletries": "Washcloth, medium towel",
        "Essentials": "",
        "Weather Type": "Sunny"
      },
      {
        "Clothing": "Light jacket/rain jacket",
        "Toiletries": "Earplugs",
        "Essentials": "",
        "Weather Type": "Rainy"
      },
      {
        "Clothing": "Cotton shirts",
        "Toiletries": "Makeup",
        "Essentials": "",
        "Weather Type": "Sunny"
      },
      {
        "Clothing": "Jeans",
        "Toiletries": "Feminine items",
        "Essentials": "",
        "Weather Type": "All type"
      },
      {
        "Clothing": "Light-weight pants or shorts",
        "Toiletries": "",
        "Essentials": "",
        "Weather Type": "Sunny"
      }
     ];






     $scope.menReq.forEach(element => {



       if(element["Clothing"] !="" && element["Weather Type"] == "Sunny")
       $scope.menClothesSunny.push(element["Clothing"]);
       if(element["Toiletries"] !="" && element["Weather Type"] == "Sunny")
       $scope.menToiletries.push(element["Toiletries"]);
       if(element["Essentials"] !="" && element["Weather Type"] == "Sunny")
       $scope.menEssentials.push(element["Essentials"]);

       if(element["Clothing"] !="" && element["Weather Type"] == "Rainy")
       $scope.menClothesRainy.push(element["Clothing"]);
       if(element["Toiletries"] !="" && element["Weather Type"] == "Rainy")
       $scope.menToiletries.push(element["Toiletries"]);
       if(element["Essentials"] !="" && element["Weather Type"] == "Rainy")
       $scope.menEssentials.push(element["Essentials"]);

       if(element["Clothing"] !="" && element["Weather Type"] == "Snow")
       $scope.menClothesSnow.push(element["Clothing"]);
       if(element["Toiletries"] !="" && element["Weather Type"] == "Snow")
       $scope.menToiletries.push(element["Toiletries"]);
       if(element["Essentials"] !="" && element["Weather Type"] == "Snow")
       $scope.menEssentials.push(element["Essentials"]);

       if(element["Clothing"] !="" && element["Weather Type"] == "All Type")
       $scope.menClothesAll.push(element["Clothing"]);
       if(element["Toiletries"] !="" && element["Weather Type"] == "All Type")
       $scope.menToiletries.push(element["Toiletries"]);
       if(element["Essentials"] !="" && element["Weather Type"] == "All Type")
       $scope.menEssentials.push(element["Essentials"]);


       
     });

     $scope.womenReq.forEach(element => {
      if(element["Clothing"] !="" && element["Weather Type"] == "Sunny")
      $scope.womenClothesSunny.push(element["Clothing"]);
      if(element["Toiletries"] !="" && element["Weather Type"] == "Sunny")
      $scope.womenToiletries.push(element["Toiletries"]);
      if(element["Essentials"] !="" && element["Weather Type"] == "Sunny")
      $scope.womenEssentials.push(element["Essentials"]);

      if(element["Clothing"] !="" && element["Weather Type"] == "Rainy")
      $scope.womenClothesRainy.push(element["Clothing"]);
      if(element["Toiletries"] !="" && element["Weather Type"] == "Rainy")
      $scope.womenToiletries.push(element["Toiletries"]);
      if(element["Essentials"] !="" && element["Weather Type"] == "Rainy")
      $scope.womenEssentials.push(element["Essentials"]);

      if(element["Clothing"] !="" && element["Weather Type"] == "Snow")
      $scope.womenClothesSnow.push(element["Clothing"]);
      if(element["Toiletries"] !="" && element["Weather Type"] == "Snow")
      $scope.womenToiletries.push(element["Toiletries"]);
      if(element["Essentials"] !="" && element["Weather Type"] == "Snow")
      $scope.womenEssentials.push(element["Essentials"]);

      if(element["Clothing"] !="" && element["Weather Type"] == "All Type")
      $scope.womenClothesAll.push(element["Clothing"]);
      if(element["Toiletries"] !="" && element["Weather Type"] == "All Type")
      $scope.womenToiletries.push(element["Toiletries"]);
      if(element["Essentials"] !="" && element["Weather Type"] == "All Type")
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
    
    
    var initialize = function(){
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
  }
  initialize();

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
      console.log("Selected Weather", $scope.weatherMain[selectedW]);
      if($scope.weatherMain[selectedW] == "Rain"){
        $scope.weatherType = "Rain"
        $scope.menClothes = $scope.menClothesRainy;
        // $scope.menToiletries = $scope.menClothesRainy;
        // $scope.menEssentials = $scope.menClothesRainy;
        $scope.womenClothes = $scope.womenClothesRainy;
        // $scope.womenToiletries = $scope.womenClothesRainy;
        // $scope.womenEssentials = $scope.womenClothesRainy;

      }
      else if($scope.weatherMain[selectedW] == "Clear"){
        $scope.weatherType = "Clear"
        console.log("Cleary", $scope.menClothesSunny);
        $scope.menClothes = $scope.menClothesSunny;
        // $scope.menToiletries = $scope.menClothesSunny;
        // $scope.menEssentials = $scope.menClothesSunny;
        $scope.womenClothes = $scope.womenClothesSunny;
        // $scope.womenToiletries = $scope.womenClothesSunny;
        // $scope.womenEssentials = $scope.womenClothesSunny;
      } 
      else if($scope.weatherMain[selectedW] == "Snow"){
        $scope.weatherType = "Snow"
        // $scope.menClothes = $scope.menClothesSnow;
        // $scope.menToiletries = $scope.menClothesSnow;
        $scope.menEssentials = $scope.menClothesSnow;
        // $scope.womenClothes = $scope.womenClothesSnow;
        // $scope.womenToiletries = $scope.womenClothesSnow;
        $scope.womenEssentials = $scope.womenClothesSnow;
      }
      initialize();
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
