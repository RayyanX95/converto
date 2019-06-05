# Converto

## Table of Contents

* [Name](#Converto)
* [Description](#Description)
* [Visuals](#Visuals)
* [Requirements](#Requirements)
* [Run The App](#Run_The_App)
* [Challenges](#Challenges)
* [Release](#Release)
* [Contributing](#Contributing)
<!-- * [V2 Features](#V2_Features) -->

## Converto

Converto is a React web app that converts units

## Description

**Converto** is an **React** web application built using ` ReactJS ` . **Converto** is an application that aims to convert from a unit to another such as from foot to inch and vice versa. This app has the most common units such length units, time units, ...etc. click on [Converto](https://rayyan995.github.io/converter/#/) to try the app and see it live.

## Visuals
click on [Converto](https://rayyan995.github.io/converter/#/) to try the app and see it live.
* Image for mobile responsive:<br />
![List of units to select from](https://github.com/Rayyan995/converter/blob/master/screenshots/c_mobile_view.png)


## Requirements

To run this app on your local machine there are some dependencies you have to install first. These **dependencies** are:

* [ ` node ` ](https://nodejs.org/en/)  

    You should download it and install on your machine

* [ ` redux ` ](https://www.npmjs.com/package/redux)  

    A great standalone tool to manage ** state change ** and decreases ** components coupling ** .

* [ ` react-redux ` ](https://www.npmjs.com/package/react-redux)  

    Since ` redux ` 
    is a standalone tool that is not dedicated to ** React JS ** , we need another package to hook it within a ** React JS ** app and here ` react-redux ` 
    comes to the scene.

* [ ` bootstrap ` ](https://getbootstrap.com/)  

    **Bootstrap** is the most popular **CSS Framework** for developing responsive and mobile-first websites.

    **Bootstrap** 4 is the newest version of Bootstrap

* [ ` react-bootstrap ` ](https://react-bootstrap.github.io/)  

    **React bootstrap** replaces the Bootstrap javascript. Each component has been built from scratch as a true **React** component, without unneeded dependencies like jQuery.

* [ ` react-router-dom ` ](https://www.npmjs.com/package/react-router-dom)

    React Router is the most popular routing library for React. It allows you define routes in the same declarative style:

``` js
    < Route path = "/home" component = {Home} />
```

## Run_The_App
To install all **dependencies** use your **Command Line** to browse to the project folder and hit:
``` bash
npm install
```
then hit the next command to run the app:
``` bash
npm start
```

## Challenges
There was only big challenge, It was how to store all units in a hierarchy that makes it easy to deal with them and extract them to show on the screen as next two images image:
* From Unit List: <br />
![List of units to select from](https://github.com/Rayyan995/converter/blob/master/screenshots/c_from.png)
* To Unit List: <br />
![List of units to select from](https://github.com/Rayyan995/converter/blob/master/screenshots/c_to.png)

I tried to set them in a form that makes it easy to deal with the units, next code:
``` js
export const allUnits = [
    // length units
    {
        id: 1,
        name: 'Length',
        fromTo: [
            { name: 'Mile', value: 1609.35 },
            { name: 'Kilometer', value: 1000 },
            { name: 'Meter', value: 1 },
            { name: 'Centimeter', value: 0.01 },
            { name: 'Millimeter', value: 0.001 },
            { name: 'Yard', value: 0.9144 },
            { name: 'Foot', value: 0.3048 },
            { name: 'Inch', value: 0.0254 },
        ]
    },
    // weight units
    {
        id: 2,
        name: 'Weight',
        fromTo: [
            { name: 'Kilogram', value: 1000 },
            { name: 'Gram', value: 1 },
            { name: 'Milligram', value: 0.001 },
            { name: 'Pound', value: 2204.62262 },
        ]
    },
    // time units ----------------------------------------------------------------------------
    {
        id: 3,
        name: 'Time',
        fromTo: [
            { name: 'Hour', value: 3600 },
            { name: 'Minute', value: 60 },
            { name: 'Second', value: 1 },
            { name: 'Millisecond', value: 0.001 },
            { name: 'Microsecond', value: 0.000001 },
        ]
    },
    // Temperature units ----------------------------------------------------------------------
    {
        id: 4,
        name: 'Temperature',
        fromTo: [
            { name: 'Celsius', value: 0 },
            { name: 'Kelvin', value: -273.15 },
            { name: 'Fahrenheit', value: 32 },
        ]
    },
    // Area units ----------------------------------------------------------------------
    {
        id: 5,
        name: 'Area',
        fromTo: [
            { name: 'Square Mile', value: 1609.35 * 1609.35 },
            { name: 'Square Kilometer', value: 1000 * 1000 },
            { name: 'Square Meter', value: 1 },
            { name: 'Square Centimeter', value: 0.01 * 0.01 },
            { name: 'Square Millimeter', value: 0.001 * 0.001 },
            { name: 'Square Yard', value: 0.9144 * 0.9144 },
            { name: 'Square Foot', value: 0.3048 * 0.3048 },
            { name: 'Square Inch', value: 0.0254 * 0.0254 },
        ]
    },
]
```

## Release 
The application has been deployed to Github and can be found [here](https://rayyan995.github.io/converter/#/)

## Contributing

Pull requests are welcome.For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

