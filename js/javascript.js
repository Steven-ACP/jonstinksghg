/** @format */

//button
let submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", getWords);
function getWords() {
  let words = document.querySelectorAll("input[type='text']");

  var placeholders = document.querySelectorAll(".userInput");

  placeholders.forEach((placeholder, index) => {
    placeholder.innerHTML = words[index].value;

    // console.log(words[index].value);
  });
}
//function button() {
//  let inputName = document.getElementById("nameInput");
//  let inputAge = document.getElementById("ageInput");
//  let inputLocation = document.getElementById("locationInput");
//  let inputPet = document.getElementById("petInput");
// let inputJob = document.getElementById("jobInput");

// let value = inputName.value;
//let ageValue = inputAge.value;
//let locationValue = inputLocation.value;
//let petValue = inputPet.value;
//let jobValue = inputJob.value;

//  document.getElementById("outPut").textContent =

//  "Your Job(s)" +
// radioValue +
// "Your Pet" +
// petValue;
//}
