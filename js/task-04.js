let counterValue = 0;

let counterValueEl = document.querySelector("#value");

let addBtn = document.querySelector('[data-action="increment"]')

let subBtn = document.querySelector('[data-action="decrement"]')

addBtn.addEventListener(`click`,()=> {
    counterValue+=1;
    counterValueEl.textContent=counterValue;
});


subBtn.addEventListener(`click`,()=> {
    counterValue-=1;
    counterValueEl.textContent=counterValue;
});


