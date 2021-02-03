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

const forecast = {
  // code here
  date: "",
  temp: "",
  humidity: "",
};

const fiveDay = `
  <div class="song">
<h2>${forecast.date}</h2> 
<p>Temperature: ${forecast.temp}</p>
<p>Humidity: ${forecast.humidity}</p>
  </div>
`;

const element = document.getElementById("forecast");
element.innerHTML = fiveDay;
