let detailedCardDiv = document.querySelector('.detailedCard');
 
const parameters = new URLSearchParams(window.location.search);
const id = parameters.get('id');

fetch(`https://rentcar.stepprojects.ge/api/Car/${id}`)
.then(el => el.json())
.then(el => printAllCards(el))
 
function printAllCards(el){
   
        if(5>3){
            detailedCardDiv.innerHTML += `
            <div class="card detailedCardVisual">
                <img src="${el.imageUrl1}" alt="there should have been an image">
                <div class="texts">
                <span>${el.brand} ${el.model}</span>
                <span>${el.price}000$</span>
                <a href="index.html">Back</a>

                </div>
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
        `
        }  
 
    }
 
 