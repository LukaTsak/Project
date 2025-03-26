let cardsDiv = document.querySelector('.cards')
let search = document.querySelector('.search')
let filter = document.querySelector('.filter')
let capacity = document.querySelector('.capacity')
let startYear = document.querySelector('.startYear')
let endYear = document.querySelector('.endYear')
let city = document.querySelector('.city')
let filterButton = document.querySelector('.filterButton')


fetch('https://rentcar.stepprojects.ge/api/Car')
.then(el => el.json())
.then(el => printAllCards(el))

let cars = [] // to globalize array

function printAllCards(array){
    array.forEach(el => {
        cars.push(el)
        if(el.model != null && el.brand != null && el.imageUrl1 != null){
            cardsDiv.innerHTML += `
            <div class="card">
                <img src="${el.imageUrl1}" alt="there should have been an image">
                <span>${el.brand} ${el.model}</span>
                <span>${el.price}000$</span>
            </div>
        `
        }
}
)
}

console.log(cars)

search.addEventListener('input', function(){
    let searchValue = this.value.toLowerCase()
    cardsDiv.innerHTML = ''
    cars.forEach(car => {
        if(car.brand.toLowerCase().includes(searchValue) || car.model.toLowerCase().includes(searchValue)){
            cardsDiv.innerHTML += `
            <div class="card">
                <img src="${car.imageUrl1}" alt="there should have been an image">
                <span>${car.brand} ${car.model}</span>
                <span>${car.price} 000$</span>
            </div>
        `
        }
    })
})

filter.addEventListener('change', function(){
    if(filter.value == 'asc'){
        filterCardsAsc(cars)
    }
    else if(filter.value == 'desc'){
        filterCardsDesc(cars)
    }
    else{
        printAllCards(cars)
    }
})

function filterCardsAsc(array){
    cars.sort((a,b) => a.price - b.price)
    console.log(cars)
    cardsDiv.innerHTML = ''
    cars.forEach(el => {
        if(el.model != null && el.brand != null && el.imageUrl1 != null){
            cardsDiv.innerHTML += `
            <div class="card">
                <img src="${el.imageUrl1}" alt="there should have been an image">
                <span>${el.brand} ${el.model}</span>
                <span>${el.price}000$</span>
            </div>
        `
        }
    })
}

function filterCardsDesc(array){
    cars.sort((a,b) => b.price - a.price)
    console.log(cars)
    cardsDiv.innerHTML = ''
    cars.forEach(el => {
        if(el.model != null && el.brand != null && el.imageUrl1 != null){
            cardsDiv.innerHTML += `
            <div class="card">
                <img src="${el.imageUrl1}" alt="there should have been an image">
                <span>${el.brand} ${el.model}</span>
                <span>${el.price}000$</span>
            </div>
        `
        }
    })
}

function detailedFilterRender(array){
    console.log(array)
    cardsDiv.innerHTML = ''
    array.forEach(el => {
        if(el.model!= null && el.brand!= null && el.imageUrl1!= null){
            cardsDiv.innerHTML += `
            <div class="card">
                <img src="${el.imageUrl1}" alt="there should have been an image">
                <span>${el.brand} ${el.model}</span>
                <span>${el.price}000$</span>
            </div>
        `
        }
    })
}


filterButton.addEventListener('click', function(){
    fetch(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${capacity.value}&startYear=${startYear.value}&&endYear=${endYear.value}&city=${city.value}&pageIndex=1&pageSize=10`)
    .then(el => el.json())
    .then(el => detailedFilterRender(el.data))

})



