let textEl=document.querySelector("#text");

let sizeControlEl = document.querySelector('#font-size-control');


sizeControlEl.addEventListener('input',(e)=>{
    // added 2 options and it works fine both ways
    textEl.setAttribute('style',`font-size:${e.target.value}px`);

    // textEl.setAttribute('style',`font-size:${sizeControlEl.value}px`);

})



