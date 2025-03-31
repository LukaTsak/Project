userNum = localStorage.getItem('num')

fetch(`https://rentcar.stepprojects.ge/api/Users/${userNum}/favorite-cars`)