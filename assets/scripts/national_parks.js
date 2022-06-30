//This file has locationsArray, nationalParksArray, and parkTypesArray access
// We included load_national_parks_data.js above it in the html file

// Everything is going to be event driven based on user input.//

// Get the dropdown list in the JS
let searchTypeDDL = document.querySelector("#searchTypeDDL");
let locationsDDL = document.querySelector("#locations");
let typesDDL = document.querySelector("#types");
let stateSearchList = document.querySelector("#stateSearchList");
let typeSearchAttributeList = document.querySelector("#typeSearchAttributeList");
// Make the table work
let locationTable = document.querySelector("#locationTable");
let locationTableBody = document.querySelector("#locationTableBody");

// theSampleButton.addEventListener("click", function(event){
//     console.log(locationsArray)
//     console.log(nationalParksArray)
//     console.log(parkTypesArray)



searchTypeDDL.addEventListener("change", function (event) {
    alert("dropdown changed to:" + event.target.value)

    // check which search type
    // if search type is type then show types dropdown
    // if search type is location then show locations dropdown

    //hide all the dropdowns and then check which is supposed to show below
   
    stateSearchList.classList.add("d-none")

    if (event.target.value === "location") {
        generateLocationsDDLOptions();
        stateSearchList.classList.remove("d-none")
    }

    typeSearchAttributeList.classList.add("d-none")

    if(event.target.value === "types") {
    generateLocationsDDLOptions();
    typeSearchAttributeList.classList.remove("d-none")
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

typeSearchAttributeList.addEventListener("change", function (event) {
    alert("dropdown changed to:" + event.target.value)
    let filteredParksArray = nationalParksArray.filter(function (park) {
        if (park.Type === event.target.value) {
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

    parkTypesArray.forEach((parkType) => {
        typeSearchAttributeList.innerHTML += `<option value="${parkType}">${parkType}</option>`
    })

}

function generateLocationTableData(filteredParksArray) {

filteredParksArray.forEach((parkType) => {
    locationTableBody.innerHTML +=  <tr>
        <td>${nationalParksArray.LocationName}</td>
        <td>${nationalParksArray.address}</td>
        <td>${nationalParksArray.City}</td>

    </tr>
}
)

}


function generateCards(someArray){
// empty previous results
priorCardsDiv.innerHTML = ""

// generate new table rows and append to the tbody innerHTML
someArray.forEach((park))=>{
    let card = '<div class="col">'
    card +='<div class="card">'
    card +='   <img src="..." class="card-img-top"  alt="...">'
    card +='   <div class="card-body">'
    card +='    <h5 class="card-title"> Card Title</h5>'
    card +='    <p class="card-text"> This is a longer card...>'
    card +='    <div class="card-body">'
    card +='    <h5 class="card-title> Card Title</h5'
    card +='    <p class="card-text"> This is a longer card...>'
    card +='    </div>'
    card +='   </div>'
    card +='    </div>'

    resultCardsDiv.innerHTML += card
}


}


