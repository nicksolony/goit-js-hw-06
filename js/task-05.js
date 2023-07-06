let inputEl = document.querySelector('input#name-input');

let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input',(e) => {

    outputEl.textContent = e.target.value ? e.target.value : 'Anonymous';    

})