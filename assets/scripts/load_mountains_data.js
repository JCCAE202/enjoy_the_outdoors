"use strict"

let mountainsArray = []

let mountainsDDL = document.querySelector("#mountains")

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountainsData) => {
        mountainsArray = mountainsData.mountains;

        //code would go here for stuff that needs to be done with the data on page load
        generateMountainsDDL()

        mountainsDDL.classList.remove("d-none")

        console.log(mountainsArray.map(function(mountain){
            return mountain.name
        }))

    })

}


function generateMountainsDDL(){

    mountainsDDL.innerHTML = `<option value="">Choose A Mountain</option>`

    mountainsArray.forEach((mountain) => {
        mountainsDDL.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
    })
}

    //function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}