var searchInput = document.querySelector("#searchValue");
var searchButton = document.querySelector("#search");
var searchHistory = document.querySelector("#searchHistory");

renderSearchHistory();

function renderSearchHistory() {
  var search = localStorage.getItem("search");

  searchHistory.textContent = search;
}

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();
  var search = document.querySelector("#searchValue").value;
  localStorage.setItem("search", search);
  renderSearchHistory();
});
