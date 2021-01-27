var searchInfo = document.querySelector(".search-box");
var searchInput = document.querySelector("#searchValue");
var searchButton = document.querySelector(".btn");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  searchInput.textContent = searchHistory.add(historyInput1);
  localStorage.setItem("history", history);
  //   add to search input results to search history
  //   localStorage.setItem("searchInfo", JSON.stringify(user));
});
