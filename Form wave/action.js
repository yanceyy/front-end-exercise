const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");
const email = document.getElementById("email");
const password = document.getElementById("password");


email.addEventListener('focus',()=>{
    emailLabel.classList.remove('unfocus')
})

email.addEventListener('blur',()=>{
    if(email.value == "") emailLabel.classList.add('unfocus')
})

password.addEventListener('focus',()=>{
    passwordLabel.classList.remove('unfocus')
})

password.addEventListener('blur',()=>{
    if(password.value == "") passwordLabel.classList.add('unfocus')
})

