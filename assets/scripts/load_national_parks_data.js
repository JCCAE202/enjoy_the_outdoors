"use strict"

let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []

let theSampleUL = document.querySelector("#locations")

window.onload = function(){

    loadJsonData("assets/data/locations.json").then((locations) => {
        locationsArray = locations;

        locationsArray.forEach((location) => {
            theSampleUL.innerHTML += `<li>${location}</li>`
        })



        theSampleUL.classList.remove("d-none")


    })

    loadJsonData("assets/data/nationalparks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parktypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
    })

}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}