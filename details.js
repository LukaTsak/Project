let detailedCardDiv = document.querySelector('.detailedCard');
let similars = document.querySelector('.similars');


const parameters = new URLSearchParams(window.location.search);
const id = parameters.get('id');

let cityG;

fetch(`https://rentcar.stepprojects.ge/api/Car/${id}`)
    .then(response => response.json())
    .then(el => {
        printAllCards(el);
        cityG = el.city; // cityG-ს აქ ვანიჭებთ სწორად

        // მეორე fetch() აქ უნდა გავუშვათ, cityG-ს სწორად მინიჭების შემდეგ
        return fetch(
            `https://rentcar.stepprojects.ge/api/Car/filter?city=${cityG}&pageIndex=1&pageSize=10`
        );
    })
    .then(response => response.json())
    .then(data => detailedFilterRender(data.data))

function printAllCards(el) {
    detailedCardDiv.innerHTML += `
        <div class="card detailedCardVisual">
            <a href="index.html?id=${el.id}">
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
        <div class="Details">
            <span>გამოშვების წელი: ${el.year}</span>
            <span>ტევადობა: ${el.capacity}</span>
            <span>გადაცემატა კოლოფი: ${el.transmission}</span>
            <span>მობილურის ნომერი: ${el.createdBy}</span>
            <span>საწვავის ავზის მოცულობა: ${el.fuelCapacity}</span>
            <span>ადგილმდებარეობა: ${el.city}</span>
            <span>სიგანე: ${el.latitude}</span>
            <span>სიგრძე: ${el.longitude}</span>
        </div>
    `;
}

function detailedFilterRender(array) {
    console.log("CityG in detailedFilterRender:", cityG); // აქ cityG უკვე ექნება მნიშვნელობა
    console.log(array);
    similars.innerHTML = "";
    array.forEach((el) => {
        if (el.model != null && el.brand != null && el.imageUrl1 != null) {
            similars.innerHTML += `
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
