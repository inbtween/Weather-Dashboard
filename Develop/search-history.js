var searchInput = document.querySelector("#searchValue");
var searchForm = document.querySelector("#search-form");
var searchList = document.querySelector("#search-list");
var searchCountSpan = document.querySelector("#search-count");

var search = [];

// The following function renders items in a search list as <li> elements
function rendersearch() {
  // Clear searchList element and update searchCountSpan
  searchInput.innerHTML = "";
  // searchCountSpan.textContent = search.length;

  // Render a new li for each search
  for (var i = 0; i < search.length; i++) {
    var search = search[i];

    var li = document.createElement("li");
    li.textContent = search;
    li.setAttribute("#searchValue", i);

    // var button = document.createElement("button");
    // button.textContent = "Complete ✔️";

    li.appendChild(button);
    searchList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored search from localStorage
  var storedSearch = JSON.parse(localStorage.getItem("search"));

  // If search were retrieved from localStorage, update the search array to it
  if (storedSearch !== null) {
    search = storedSearch;
  }

  // This is a helper function that will render search to the DOM
  rendersearch();
}

function storesearch() {
  // Stringify and set key in localStorage to search array
  localStorage.setItem("search", JSON.stringify(search));
}

// Add submit event to form
searchForm.addEventListener("search", function (event) {
  event.preventDefault();

  var searchText = searchInput.value.trim();

  // Return from function early if submitted searchText is blank
  if (searchText === "") {
    return;
  }

  // Add new searchText to search array, clear the input
  search.push(searchText);
  searchInput.value = "";

  // Store updated search in localStorage, re-render the list
  storeSearch();
  renderSearch();
});

// Add click event to searchList element
searchInput.addEventListener("click", function (event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the search element from the list
    var index = element.parentElement.getAttribute("search");
    search.splice(index, 1);

    // Store updated search in localStorage, re-render the list
    storeSearch();
    renderSearch();
  }
});

// Calls init to retrieve data and render it to the page on load
init();
