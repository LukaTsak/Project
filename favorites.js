let cont = document.querySelector('.cardsdivv')

let number = localStorage.getItem('num')


fetch (`https://rentcar.stepprojects.ge/api/Users/${number}/favorite-cars`)
.then(el => el.json())
.then(el => printAllCards(el))



function printAllCards(array) {
    cont.innerHTML = "";
    array.forEach((el) => {
      if (el.model != null && el.brand != null && el.imageUrl1 != null) {
        cont.innerHTML += `
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