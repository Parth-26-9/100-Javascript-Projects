let number = document.getElementById('number');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');


let x = parseInt(number.innerHTML)

    add.addEventListener('click',()=>{
            x++;
            number.innerHTML = String(x);
            setColor();
    })
    minus.addEventListener('click',()=>{
        if(x>0)
        {
            x--;
            number.innerHTML = String(x);
            setColor();
        }
    })
    reset.addEventListener('click',()=>{
        x = 0;
        number.innerHTML = String(x);
        setColor();
    })


const setColor = () => {

    if(number.innerHTML == 0)
    {
        number.style.color="blue";
    }
    else if(number.innerHTML > 9)
    {
        number.style.color="red";
    }
    else{
        number.style.color="green";
    }
}



