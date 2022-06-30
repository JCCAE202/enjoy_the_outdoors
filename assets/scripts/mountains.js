// Everything is going to be event driven based on user input.//

// Get the dropdown list in the JS

let mountainSearchList = document.querySelector("#mountainSearchList");

mountainSearchList.addEventListener("click", function (event) {
    alert("dropdown changed to:" + event.target.value)

})

<script>
    function populateSelect() {

const mountains = []





}