let userNumber = localStorage.getItem('num')
let container = document.querySelector('.cont')


fetch(`https://rentcar.stepprojects.ge/api/Car/byPhone?PhoneNumber=${userNumber}`)
.then((el) => el.json())
.then((el) => printAllCards(el));

function printAllCards(array) {
    array.forEach((el) => {
      if (el.model != null && el.brand != null) {
        console.log(el.Image1)
        console.log('Print')
        container.innerHTML += `
              <div class="card">
              <a href="details.html?id=${el.id}">
                  <img src="${el.Image1}" alt="there should have been an imageee">
  
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
  