# Pack-In-eZ

Pack-In-eZ is a smart web based application that helps you pack clothing based on weather condition, flight information and create a personalized packing list! 

  * Weather based clothing forecast: We require the users to feed in your travel dates, city you are traveling to, age, gender and flight details. Once we have these inputs, the program will open to a 5 day weather forecast  in the city you are traveling to and suggest appropriate clothing for when they arrive. 
  * Packing list: There is also a ready clothing list available for Men, Women, Children, A toiletry list and a list for essentials. This can be used regardless of the weather condition and can be customized to one’s needs. 
  * Flight information: Using your flight inputs we show you the baggage allowance for your airlines. This would help you to plan your luggage well and avoid paying for more baggage allowance. 
 * Reduce stress: The ultimatum of this web based application is to help reduce travel stress, primarily for ‘Packing’. 
  
## BUILD/INSTALLATION INSTRUCTIONS
  * Download and install npm from the command line
  * Install yeoman
    * npm install -g grunt-cli bower yo generator-karma generator-angular
  * Download the source code of this repo
  * Run the grunt server from the root of the folder
     * grunt serve

## BUILDING AND RUNNING FROM DOCKER IMAGE
  * Clone the source code
  * Go to the directory pack-in-ez
  * Run docker build command
    * docker build -t pac-in-ez:deploy .
  * Run the docker image
    * docker run --name pac-in-ez -p 8000:9000 pac-in-ez:deploy
  * Open your browser and type
    * http://localhost:8000/
    
                          ##OR
    
  * You can directly pull the docker image and run the docker image
  * Pull docker image
    * docker pull ullasaithal/pac-in-ez
  * Run the docker image
    * docker run --name pac-in-ez -p 8000:9000 pac-in-ez:deploy
  * Open your browser and type
    * http://localhost:8000/
    

## OTHER SOURCES OF DOCUMENTATION
* https://openweathermap.org/api
* https://sandbox.amadeus.com/ 

## Contributor Guide
[CONTRIBUTING](/CONTRIBUTING.md)

## License 
[LICENSE](/LICENSE)
