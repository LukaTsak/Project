let brandInput = document.querySelector('input[name="Brand"]');
let modelInput = document.querySelector('input[name="Model"]');
let yearInput = document.querySelector('input[name="Year"]');
let priceInput = document.querySelector('input[name="Price"]');
let capacityInput = document.querySelector('input[name="Capacity"]');
let transmissionInput = document.querySelector('input[name="Transmission"]');
let createdByInput = document.querySelector('input[name="CreatedBy"]');
let cityInput = document.querySelector('input[name="City"]');
let createdByEmailInput = document.querySelector('input[name="CreatedByEmail"]');
let fuelCapacityInput = document.querySelector('input[name="FuelCapacity"]');
let image1Input = document.querySelector('input[name="Image1"]');
let image2Input = document.querySelector('input[name="Image2"]');
let image3Input = document.querySelector('input[name="Image3"]');
let latitudeInput = document.querySelector('input[name="Latitude"]');
let longitudeInput = document.querySelector('input[name="Longitude"]');
let listBtn = document.querySelector('.listBTN')

listBtn.addEventListener('click',function() {
    listcar();
    alert('Car added successfully');
    clearInputs();
})

function listcar() {
    let formData = new FormData();
  
    formData.append("Brand", brandInput.value);
    formData.append("Model", modelInput.value);
    formData.append("Year", yearInput.value);
    formData.append("Price", priceInput.value);
    formData.append("Capacity", capacityInput.value);
    formData.append("Transmission", transmissionInput.value);
    formData.append("CreatedBy", createdByInput.value);
    formData.append("City", cityInput.value);
    formData.append("CreatedByEmail", createdByEmailInput.value);
    formData.append("FuelCapacity", fuelCapacityInput.value);
    formData.append("Latitude", latitudeInput.value);
    formData.append("Longitude", longitudeInput.value);
  
    fetch("https://rentcar.stepprojects.ge/api/Car", {
      method: "POST",
      headers: {
        "accept": "text/plain"
        // Content-Type არ წერო, browser თვითონ მიუთითებს boundary-იან multipart/form-data-ს
      },
      body: formData
    })
      .then(res => res.text())
      .then(data => console.log("Response:", data))
      .catch(err => console.error("Error:", err));
  }
  