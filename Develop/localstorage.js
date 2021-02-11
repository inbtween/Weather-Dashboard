// todo would be the #searchValue
var searchInput = document.querySelector("#searchValue");
var searchButton = document.querySelector("#search");
var searchHistory = document.querySelector("#searchHistory");

renderSearchHistory();

function renderSearchHistory() {
  var search = JSON.parse(localStorage.getItem("search"));
  searchHistory.textContent = search;
  searchInput.textContent.content = "";
  searchValue.forEach(function (search, i) {
    var searchItem = document.createElement("li");
    searchItem.textContent = search.title;
    searchInput.appendChild(searchItem);
  });
}

var newSearch = function (event) {
  event.preventDefault();
  var searchValue = {
    title: (searchHistory.value = ""),
  };
  renderSearchHistory();
};

searchButton.addEventListener("submit", newSearch);
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  var search = document.querySelector("#searchValue").value;
  localStorage.setItem("search", search);
  renderSearchHistory();
});
