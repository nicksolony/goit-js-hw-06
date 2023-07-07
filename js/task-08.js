let formEl= document.querySelector('.login-form');



formEl.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    let email = e.target.elements['email'].value;
    let password = e.target.elements['password'].value;

    if ( !email || !password) {
        alert('All fields must be filled in!')
    } else {
        let loginIngo = {email,password};
        console.log(loginIngo);
        e.target.reset();    
    }
})
