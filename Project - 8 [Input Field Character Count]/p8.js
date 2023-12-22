const input = document.getElementById("inputText");
const btn = document.getElementById("btn");
const capitalChar = document.getElementById("capital");
const smallChar = document.getElementById("small");
const numbersChar = document.getElementById("numbers");
const specialChara = document.getElementById("specialChar");

let capitalLetter = 0;
let smallLetter = 0;
let specialLetter = 0;
let numberLetter = 0;

btn.addEventListener("click", function() {
  charCounter(input.value);

  // Update the display after counting characters
  capitalChar.innerHTML = `${capitalLetter} Capital Character`;
  smallChar.innerHTML = `${smallLetter} Small Character`;
  specialChara.innerHTML = `${specialLetter} Special Character`;
  numbersChar.innerHTML = `${numberLetter} Numbers`;

});

function charCounter(str) {
  let capital = 0;
  let small = 0;
  let specialChar = 0;
  let numbers = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      small++;
    } else if (str[i] >= "A" && str[i] <= "Z") {
      capital++;
    } else if (str[i] >= "0" && str[i] <= "9") {
      numbers++;
    } else {
      specialChar++;
    }
  }

  smallLetter = small;
  capitalLetter = capital;
  specialLetter = specialChar;
  numberLetter = numbers;
}
