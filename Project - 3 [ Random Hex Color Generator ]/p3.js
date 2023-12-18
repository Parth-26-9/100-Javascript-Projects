const generateButton = document.getElementById('gColor')
const inputText = document.getElementById('inputText')
const myBody = document.getElementById('myBody')
const clearBtn = document.getElementById('clear')



const generateColor = ()=>{
    const hexColor  = "#" + Math.random().toString(16).substring(2,8);
    myBody.style.backgroundColor = hexColor
    inputText.value = hexColor
}
const clearColor = ()=>{
    myBody.style.backgroundColor = "white";
    inputText.value = ""
}

generateButton.addEventListener('click',generateColor)
clearBtn.addEventListener('click',clearColor)
