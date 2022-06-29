//This file has locationsArray, nationalParksArray, and parkTypesArray access
// We included load_national_parks_data.js above it in the html file

// Everything is going to be event driven based on user input.//

// Get the dropdown list in the JS
let searchTypeDDL = document.querySelector("#searchTypeDDL");
let locationsDDL = document.querySelector("#locations");
let typesDDL = document.querySelector("#types");
let stateSearchList = document.querySelector("#stateSearchList");


// theSampleButton.addEventListener("click", function(event){
//     console.log(locationsArray)
//     console.log(nationalParksArray)
//     console.log(parkTypesArray)


//     locationsArray.forEach((location) => {
//         theSampleUL.innerHTML += `<li>${location}</li>`
//     })

//     parkTypesArray.forEach((parkType) => {
//         parkTypeUL.innerHTML += `<li>${parkType}</li>`
//     })

//     nationalParksArray.forEach((park) => {
//         parksUl.innerHTML += `<li>${park.LocationName}</li>`
//     })

//     theSampleUL.classList.remove("d-none")

//     parkTypeUL.classList.remove("d-none")

//     parksUL.classList.remove("d-none")

// })




searchTypeDDL.addEventListener("change", function (event) {
    alert("dropdown changed to:" + event.target.value)

    // check which search type
    // if search type is type then show types dropdown
    // if search type is location then show locations dropdown

    //hide all the dropdowns and then check which is supposed to show below
    //     locationsDDL.classList.add("d-none")
    //     typesDDL.classList.add("d-none")
    stateSearchList.classList.add("d-none")



    if (event.target.value === "location") {
        generateLocationsDDLOptions();
        stateSearchList.classList.remove("d-none")


    }

    // if(event.target.value === "type"){
    //     generateTypesDDLOptions()
    //     typesDDL.classList.remove("d-none")
    //     locationsDDL.classList.add("d-none")

    // }
})
stateSearchList.addEventListener("change", function (event) {
    alert("dropdown changed to:" + event.target.value)
    let filteredParksArray = nationalParksArray.filter(function (park) {
        if (park.State === event.target.value) {
            return true
        }
        return false

    })
    console.log(filteredParksArray)
})




// locationsDDL.addEventListener("change", function(event){
//     alert(event.target.value)
// })

function generateLocationsDDLOptions() {

    stateSearchList.innerHTML = `<option value="">Choose A Location</option>`

    locationsArray.forEach((location) => {
        stateSearchList.innerHTML += `<option value="${location}">${location}</option>`
    })

}

function generateTypesDDLOptions() {

    parkTypesArray.forEach((partkType) => {
        typesDDL.innerHTML += `<option value="${partkType}">${partkType}</option>`
    })

}

