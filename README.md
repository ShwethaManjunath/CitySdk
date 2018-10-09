# CitySdk
This project was generated with Angular CLI version 6.0.8.
The goal is to get the the current status of available parking to every parking garage in amstradam. This details should be come from live update for that we used city link .

#Contents
•   Features 
•   Pre Requisits
•   Execution
•   Implementation

#Features 
In this project we are showing the parking areas in Amsterdam. This help user to get live parking update and location.
with this application user will aware of available spots in parking area.

#Pre Requisits
1.  Make sure you have Node.js and npm, angular cli is installed installed.
2.  Install Dependencies
$ npm install

#•   Execution
1.  Start the application
$ ng serve
2.  Your app should now be running on localhost:4200.

#Implementation

## Components

Components are generated with Angular CLI (ex : Header, Footer, Home)

## CSS

We are using the bootstrap library version 3.3.7 in this project. 
Bootstap is installed using "npm install bootstrap"
In angular.json file update css file location "./node_modules/bootstrap/dist/css/bootstrap.css"

## Google maps

In this project we are using Angular google maps(AGM) to display the garages.
We installed the AGM using command "npm install @agm/core --save".
Import AgmCoreModule form '@agm/core' in module file and provide the api key for that.
Using <agm-map> tag by providing the lat and lng to set the map.
Using <agm-marker> tag by providing the lat and lng to set the location on map. 

