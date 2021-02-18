// todo would be the #searchValue
var searchInput = document.querySelector("#searchValue");
var searchButton = document.querySelector("#search");
var searchHistory = document.querySelector("#searchHistory");

var APIKey = "988c3620d7b8b93676443618f9978507";
// Here we are building the URL we need to query the database
function currentWeather(city) {
  console.log(city)
  // We then created an AJAX call
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=" +
      city +
      "&appid=" +
      APIKey,
    method: "GET",
  })
var search = []
function renderSearch() {
  // Clear todoList element and update todoCountSpan
  searchList.innerHTML = "";
  searchValue.textContent = search.length;

  // Render a new li for each todo
  for (var i = 0; i < search.length; i++) {
    var searchHistory = search[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    searchList.appendChild(li);
  }
}
function renderSearchHistory() {
 // Clear todoList element and update todoCountSpan
 todoList.innerHTML = "";
 todoCountSpan.textContent = search.length;

 // Render a new li for each todo
 for (var i = 0; i < search.length; i++) {
   var todo = todos[i];

   var li = document.createElement("li");
   li.textContent = todo;
   li.setAttribute("data-index", i);

   var button = document.createElement("button");
  

   li.appendChild(button);
   todoList.appendChild(li);
}


function historyInput() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem(city, JSON.stringify(search));
}

searchHistory.addEventListener("submit", function (event) {
  event.preventDefault();

  var searchText = searchInput.value.trim();

  // Return from function early if submitted searchText is blank
  if (searchText === city) {
    return;
  }

  // Add new searchText to todos array, clear the input
  search.push(searchText);
  searchInput.value = city;

  // Store updated todos in localStorage, re-render the list
  searchText(city);
  renderSearchHistory();
});

// Add click event to searchInput element
searchInput.addEventListener("click", function (event) {
  var element = event.target;

});

