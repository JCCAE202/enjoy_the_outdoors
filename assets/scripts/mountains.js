// Everything is going to be event driven based on user input.//
let resultsCards = document.querySelector("#resultsCards");
// Get the dropdown list in the JS

mountainsDDL.addEventListener("change", function (event) {
    console.log("yay")
    let selectedMountain = mountainsArray.filter((mountain) => {
        return mountain.name === event.target.value

    })
    generateMountainCard(selectedMountain[0])
    resultsCards.classList.remove("d-none")

console.log(selectedMountain)
} )




// Function to provide the selected mountain info

function generateMountainCard(mountain) {
    resultsCards.innerHTML = ""
    let card = ""
    card += `<div class="card" style="width: 20rem;">`
    card += ` <img src="assets/images/mountains/${mountain.img}" class="card-img-top" alt="...">`
    card += `<div class="card body">`
    card += `     <h5 class="card-title">${mountain.name}</h5>`
    card += `     <p class="card-text">${mountain.desc}</p>`



  
    resultsCards.innerHTML += card




}