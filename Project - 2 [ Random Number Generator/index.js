const number = document.getElementById('number')
const btn = document.getElementById('reset')
const inputNumber1 = document.getElementById('inputNumber1')
const inputNumber2 = document.getElementById('inputNumber2')


btn.addEventListener('click',()=>{


    let x = Math.floor((Math.random()*inputNumber2.value)+inputNumber1.value)



    number.innerHTML = x.toString()

})

