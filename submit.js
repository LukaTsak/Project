let form = document.querySelector(".Register")
let formLogin = document.querySelector(".login")

let userNum 

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let formData = {
        phoneNumber : document.querySelector('input[class="phoneNumber"]').value,
        password : document.querySelector('input[class="password"]').value,
        email : document.querySelector('input[class="email"]').value,
        firstName : document.querySelector('input[class="firstName"]').value,
        lastName : document.querySelector('input[class="lastName"]').value,
        role : document.querySelector('input[class="role"]').value,
    }
    console.log(formData)


    fetch('https://rentcar.stepprojects.ge/api/Users/register', {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)

    }).then(resp => resp.json())
    .then(resp => console.log(resp))




})


// function updateNumber(number){
//     userNum = number
//     console.log(userNum)
// }

// console.log(userNum)



formLogin.addEventListener("submit", function(e) {
    e.preventDefault()
    let formData = {
       phoneNumber : document.querySelector('input[class="phoneNumberr"]').value,
       password : document.querySelector('input[class="passwordd"]').value,
       email : document.querySelector('input[class="emaill"]').value,
       firstName : document.querySelector('input[class="firstNamee"]').value,
       lastName : document.querySelector('input[class="lastNamee"]').value,
       role : document.querySelector('input[class="rolee"]').value,
    }

    fetch('https://rentcar.stepprojects.ge/api/Users/login', {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)

    }).then(resp => resp.json())
    .then(resp => setToken(resp))

})

function setToken(obj) {
    console.log(obj)
    localStorage.setItem('token', obj.token)
    userNum = localStorage.setItem('num', obj.phoneNumber)
    console.log(userNum)
}



