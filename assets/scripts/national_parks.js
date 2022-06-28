//This file has locationsArray, nationalParksArray, and parkTypesArray access
// We included load_national_parks_data.js above it in the html file

// Everything is going to be event driven based on user input.//


let theSampleButton = document.querySelector("#theDemoButton")
let theSampleUL = document.querySelector("#locations")
let parkTypeUL = document.querySelector("#partTypes")
let parksUL = document.querySelector("#parks")


theSampleButton.addEventListener("click", function(event){
    console.log(locationsArray)
    console.log(nationalParksArray)
    console.log(parkTypesArray)


    locationsArray.forEach((location) => {
        theSampleUL.innerHTML += `<li>${location}</li>`
    })

    parkTypesArray.forEach((parkType) => {
        parkTypeUL.innerHTML += `<li>${parkType}</li>`
    })

    nationalParksArray.forEach((park) => {
        parksUl.innerHTML += `<li>${park.LocationName}</li>`
    })

    theSampleUL.classList.remove("d-none")

    parkTypeUL.classList.remove("d-none")

    parksUL.classList.remove("d-none")

})