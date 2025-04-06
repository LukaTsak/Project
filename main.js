// import {cars} from './data'

let cardsDiv = document.querySelector(".cards");
let search = document.querySelector(".search");
let filter = document.querySelector(".filter");
let capacity = document.querySelector(".capacity");
let startYear = document.querySelector(".startYear");
let endYear = document.querySelector(".endYear");
let city = document.querySelector(".city");
let filterButton = document.querySelector(".filterButton");
let spread = document.querySelector(".spread");
let allfilters = document.querySelector(".allFilters");
let detailedFilter = document.querySelector(".detailedFilter");
let citiesSelect = document.querySelector(".citiesFilter");
let favBtn = document.getElementsByClassName("favourite");
let logoutBTN = document.querySelector(".logout");
let loadmoreBTn = document.querySelector(".load");


let userNum = localStorage.getItem("num");

console.log(userNum);

let index = 1

fetch(
  `https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=${index}&pageSize=30`
)
  .then((el) => el.json())
  .then((el) => printAllCards(el.data));

let cars = []

function printAllCards(array) {
  array.forEach((el) => {
    cars.push(el);
    if (el.model != null && el.brand != null && el.imageUrl1 != null) {
      cardsDiv.innerHTML += `
            <div class="card">
            <a href="details.html?id=${el.id}">
                <img src="${el.imageUrl1}" alt="there should have been an image">

                <div class="texts">

                <div class ="spans">
                <span>${el.city}</span>
                <span>${el.year} - ${el.brand} ${el.model}</span>
                <span>${el.price}$</span>
                </div>

                <div class="bottomhalf">
                <div data-id="${el.id}" href="" class="favourite star" ></div>
                </div>

                </div>

                </a>
            </div>
        `;
    }
  });
}

search.addEventListener("input", function () {
  let searchValue = this.value.toLowerCase();
  cardsDiv.innerHTML = "";
  cars.forEach((el) => {
    if (
      el.brand.toLowerCase().includes(searchValue) ||
      el.model.toLowerCase().includes(searchValue)
    ) {
        cardsDiv.innerHTML += `
        <div class="card">
        <a href="details.html?id=${el.id}">
            <img src="${el.imageUrl1}" alt="there should have been an image">

            <div class="texts">

            <div class ="spans">
            <span>${el.city}</span>
            <span>${el.year} - ${el.brand} ${el.model}</span>
            <span>${el.price}$</span>
            </div>

            <div class="bottomhalf">
            <div data-id="${el.id}" href="" class="favourite star" ></div>
            </div>

            </div>

            </a>
        </div>
    `;
    }
  });
});

filter.addEventListener("change", function () {
  if (filter.value == "asc") {
    filterCardsAsc(cars);
  } else if (filter.value == "desc") {
    filterCardsDesc(cars);
  } else {
    cardsDiv.innerHTML = "";
    printAllCards(cars);
  }
});

citiesSelect.addEventListener("change", function () {
  cardsDiv.innerHTML = "";
  fetch(
    `https://rentcar.stepprojects.ge/api/Car/filter?city=${citiesSelect.value}&pageIndex=1&pageSize=20`
  )
    .then((el) => el.json())
    .then((el) => printAllCards(el.data));
});

function filterCardsAsc(array) {
  cars.sort((a, b) => a.price - b.price);
  console.log(cars);
  cardsDiv.innerHTML = "";
  cars.forEach((el) => {
    if (el.model != null && el.brand != null && el.imageUrl1 != null) {
        cardsDiv.innerHTML += `
        <div class="card">
        <a href="details.html?id=${el.id}">
            <img src="${el.imageUrl1}" alt="there should have been an image">

            <div class="texts">

            <div class ="spans">
            <span>${el.city}</span>
            <span>${el.year} - ${el.brand} ${el.model}</span>
            <span>${el.price}$</span>
            </div>

            <div class="bottomhalf">
            <div data-id="${el.id}" href="" class="favourite star" ></div>
            </div>

            </div>

            </a>
        </div>
    `;
    }
  });
}

function filterCardsDesc(array) {
  cars.sort((a, b) => b.price - a.price);
  console.log(cars);
  cardsDiv.innerHTML = "";
  cars.forEach((el) => {
    if (el.model != null && el.brand != null && el.imageUrl1 != null) {
        cardsDiv.innerHTML += `
        <div class="card">
        <a href="details.html?id=${el.id}">
            <img src="${el.imageUrl1}" alt="there should have been an image">

            <div class="texts">

            <div class ="spans">
            <span>${el.city}</span>
            <span>${el.year} - ${el.brand} ${el.model}</span>
            <span>${el.price}$</span>
            </div>

            <div class="bottomhalf">
            <div data-id="${el.id}" href="" class="favourite star" ></div>
            </div>

            </div>

            </a>
        </div>
    `;
    }
  });
}

function detailedFilterRender(array) {
  console.log(array);
  cardsDiv.innerHTML = "";
  array.forEach((el) => {
    if (el.model != null && el.brand != null && el.imageUrl1 != null) {
        cardsDiv.innerHTML += `
        <div class="card">
        <a href="details.html?id=${el.id}">
            <img src="${el.imageUrl1}" alt="there should have been an image">

            <div class="texts">

            <div class ="spans">
            <span>${el.city}</span>
            <span>${el.year} - ${el.brand} ${el.model}</span>
            <span>${el.price}$</span>
            </div>

            <div class="bottomhalf">
            <div data-id="${el.id}" href="" class="favourite star" ></div>
            </div>

            </div>

            </a>
        </div>
    `;
    }
  });
}

filterButton.addEventListener("click", function () {
  fetch(
    `https://rentcar.stepprojects.ge/api/Car/filter?capacity=${capacity.value}&startYear=${startYear.value}&&endYear=${endYear.value}&city=${citiesSelect.value}&pageIndex=1&pageSize=20`
  )
    .then((el) => el.json())
    .then((el) => detailedFilterRender(el.data));
});

spread.addEventListener("click", function () {
  allfilters.classList.toggle("spread");
  detailedFilter.classList.toggle("flexwrap");
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("favourite")) {
    event.preventDefault();
    let carId = event.target.getAttribute("data-id");
    addToFavourites(carId);

    event.target.classList.toggle("backgroundcolor");
  }
});

function addToFavourites(carId) {
  console.log("hi");
  console.log(carId);
  // https://rentcar.stepprojects.ge/api/Users/592399919/favorites/957
  fetch(
    `https://rentcar.stepprojects.ge/api/Users/${localStorage.getItem(
      "num"
    )}/favorites/${carId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((resp) => console.log(resp));
}

logoutBTN.addEventListener("click", function () {
  localStorage.removeItem("num");
  localStorage.removeItem("token");
  window.location.href = "index.html";
});

loadmoreBTn.addEventListener("click", function () {
  index++;
  fetch(
    `https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=${index}&pageSize=30`
  )
    .then((el) => el.json())
    .then((el) => printAllCards(el.data));
})
