let inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur',(e)=>{
    console.log(e.target.value.length);
    if (e.target.value.length === parseInt(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.add('invalid')
    }
})
