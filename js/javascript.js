/** @format */

let submitButton = document.getElementById("submitBtn");
//
submitButton.addEventListener("click", button);

function button() {
  let inputName = document.getElementById("nameInput");
  let inputAge = document.getElementById("ageInput");
  let inputLocation = document.getElementById("locationInput");
  let inputPet = document.getElementById("petInput");
  let inputJob = document.getElementById("jobInput");
  
  let value = inputName.value;
  let ageValue = inputAge.value;
  let locationValue = inputLocation.value;
  let petValue = inputPet.value;
  let jobValue = inputJob.value;

  
  document.getElementById("outPut").textContent =
    
  //  "Your Job(s)" +
  // radioValue +
  // "Your Pet" +
  // petValue;
}
