const input = document.getElementById("inputText");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function palindromeChecker(str) {
  let sP = 0;
  let eP = str.length - 1;

  while (sP < eP) {
    if (str[sP] != str[eP]) {
      return false;
    }
    sP++;
    eP--;
  }
  return true;
}

btn.addEventListener("click", () => {
  const inputValue = input.value;

  if (palindromeChecker(inputValue)) {
    result.innerHTML = `${inputValue} is palindrome`;
  } else {
    result.innerHTML = `${inputValue} is not palindrome`;
  }
});
