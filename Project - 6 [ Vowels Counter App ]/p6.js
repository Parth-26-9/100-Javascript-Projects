const input = document.getElementById("inputText");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function palindromeChecker(str) {
  str = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

btn.addEventListener("click", () => {
  const inputValue = input.value;

  const answer = palindromeChecker(inputValue);

  result.innerHTML = `There are ${answer} vowels are there in string`;
});
