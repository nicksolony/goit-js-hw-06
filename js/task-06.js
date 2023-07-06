let inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur',(e)=>{
    // console.log(e.target.value.length);

    // console.log(parseInt(e.target.value.length)===parseInt(inputEl.getAttribute('data-length')))

    if (parseInt(e.target.value.length)===parseInt(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
})
