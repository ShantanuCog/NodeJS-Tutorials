// Initial References
let result = document.getElementById("result");
let searchButton = document.getElementById("search-button");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="; // URL for the API to filter by meal name

let userInput = document.getElementById("user-input").value; // User input for the search bar

fetch(url + "pizza")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });