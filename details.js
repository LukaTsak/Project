let detailedCardDiv = document.querySelector('.detailedCard');
 
const parameters = new URLSearchParams(window.location.search);
const id = parameters.get('id');

fetch(`https://rentcar.stepprojects.ge/api/Car/${id}`)
.then(el => el.json())
.then(el => printAllCards(el))
 
function printAllCards(el){
   
        if(5>3){
            detailedCardDiv.innerHTML += `
            <div class="card">
                <img src="${el.imageUrl1}" alt="there should have been an image">
                <div class="texts">
                <span>${el.brand} ${el.model}</span>
                <span>${el.price}000$</span>
                <a href="details.html?id=${el.id}">Details</a>

                </div>
            </div>
        `
        }  
 
    }
 
 