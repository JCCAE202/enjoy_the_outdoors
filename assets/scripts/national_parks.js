

//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

//getting the dropdown list into the JS file for us to work with
let searchTypeDDL = document.querySelector("#searchTypeDDL");

//get the locations dropdown so we can work with it
let locationsDDL = document.querySelector("#stateSearchList");

//get the types dropdown so we can work with it
let typesDDL = document.querySelector("#typeSearchAttributeList");

//pulling in the table stuff so i can work with it
let searchResults = document.querySelector("#searchResult")
let searchResultsBody = document.querySelector("#searchResult tbody")

let resultCardsDiv = document.querySelector("#resultsCards")

searchTypeDDL.addEventListener("change", function(event){

    //check which search type

    //if search type is location then show locations dropdown

    //if search type is type then show types dropdown

    //hide all the dropdowns and then check which is supposed to show below
    locationsDDL.classList.add("d-none")
    typesDDL.classList.add("d-none")

    if(event.target.value === "location"){
        generateLocationsDDLOptions();
        locationsDDL.classList.remove("d-none")
    }

    if(event.target.value === "type"){
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
    }

})

locationsDDL.addEventListener("change", function(event){

    searchResults.classList.add("d-none")
   
    let location = event.target.value;

    let filteredParks = nationalParksArray.filter((nationalPark)=>{
        return nationalPark.State === location
    
    })

    console.log(filteredParks)

    generateTableRows(filteredParks)
    // generateCards(filteredParks)

    searchResults.classList.remove("d-none")

})

typesDDL.addEventListener("change", function(event){

    searchResults.classList.add("d-none")
   
    let type = event.target.value;

    let filteredTypes = nationalParksArray.filter((nationalPark)=>{
        return nationalPark.LocationName.indexOf(type) >= 0
    
    })
    generateTableRows(filteredTypes)
    searchResults.classList.remove("d-none")

})




function generateCards(someArrayOfData){

    //clear out the tables previous results
    resultCardsDiv.innerHTML = ""


    //generate new table rows and appewnd to the the tbody innerHTML
    someArrayOfData.forEach((park)=>{
        let card = '<div class="col">'
        card += '   <div class="card h-100">'
        card += '       <img src="..." class="card-img-top" alt="...">'
        card += '       <div class="card-body">'
        card += '           <h5 class="card-title">'+ park.LocationName +'</h5>'
        card += '           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'
        card += '       <div class="card-body">'
        card += '           <h5 class="card-title">Card title</h5>'
        card += '           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'
        card += '       </div>'
        card += '   </div>'
        card += '  </div>'
        

        resultCardsDiv.innerHTML += card
    })


}

function generateTableRows(someArrayOfData){

    //clear out the tables previous results
    searchResultsBody.innerHTML = ""


    //generate new table rows and appewnd to the the tbody innerHTML
    someArrayOfData.forEach((park)=>{
        let row = ""
        row += `<tr>`
        row += `    <td>${park.LocationName}</td>`
        row += `    <td>${park.Address}</td>`
        row += `    <td>${park.City}</td>`
        row += `    <td>${park.State}</td>`
        row += `    <td>${park.Phone}</td>`
       
        row += `</tr>`

        searchResultsBody.innerHTML += row
    })

}



function generateLocationsDDLOptions(){

    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`

    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    })

}

function generateTypesDDLOptions(){

    parkTypesArray.forEach((partkType) => {
        typesDDL.innerHTML += `<option value="${partkType}">${partkType}</option>`
    })

}




