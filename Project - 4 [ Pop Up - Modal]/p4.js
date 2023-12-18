import myData from "./data.js";

const animalPhoto = document.getElementById("animalPhoto");
const animalDetails = document.getElementById("animalDetail");
const animalName = document.getElementById("animalName");
const generateBtn = document.getElementById("gBtn");
const popBtn = document.getElementById("pBtn");
const closeBtn = document.getElementById("close");
const mainClass = document.getElementById("mainClass");
let randomNumber = 0;

generateBtn.addEventListener("click", handleData);
popBtn.addEventListener("click", handlePopUp);

function handleData() {
  randomNumber = Math.floor(Math.random() * 10 + 1);
  let data = myData[randomNumber];

  animalName.innerHTML = data.name;
  animalPhoto.src = data.img;
  animalDetails.innerHTML = data.description;
}

function handlePopUp() {
    mainClass.style.display = "flex";
    
}



// setTimeout(() => {
//   document.addEventListener('DOMContentLoaded', function () {
//     closeBtn.addEventListener('click', function closeSection() {
//       mainClass.style.display = "none";
//     });
//   });
// }, 1000);
