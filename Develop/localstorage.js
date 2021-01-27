var searchHistory = document.querySelector("#counter");

var history = localStorage.getItem("history");

searchHistory.textContent = history;

$("searchButton").on("click", function () {
  searchHistory.text(history).localStorage.setItem("history", history);
});
searchButton.addEventListener("click", function () {
  searchHistory.textContent = history;
  localStorage.setItem("history", history);
});

// ------------------------------ //
var searchInfo = document.querySelector(".search-box");
var searchInput = document.querySelector("#searchValue");
var ssearchButton = document.querySelector(".btn");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  // set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
});

// ----------------------------- //
var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});
