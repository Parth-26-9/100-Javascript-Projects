const input = document.getElementById("inputValue");
const cpBtn = document.getElementById("cp");

const copyButton = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(input.value).then(() => {
    cpBtn.textContent = "Copied !!";
    setTimeout(() => {
      cpBtn.textContent = "Copy";
    }, 3000);
  });
};

cpBtn.addEventListener("click", copyButton);
