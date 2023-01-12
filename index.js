const secondPart = document.querySelector('.part-two');
const firstPart = document.querySelector('.part-one');
const nextBtn = document.querySelector('.next-btn');
const disId = document.querySelector('#dis-id');
const showPassword = document.querySelector('#show-password');
const passwordField = document.querySelector('#password');
const loginBtn = document.getElementById('loginBtn');


nextBtn.addEventListener('click', function () {
    firstPart.classList.add('active');
    secondPart.classList.add('active');
    console.log('Next');
});

var clicked = false;
function toogle() {
    if (!clicked) {
        clicked = true;
        showPassword.innerText = 'visibility_off';
        passwordField.type = "text";
    } else {
        clicked = false;
        showPassword.innerText = 'visibility';
        passwordField.type = "password";
    }
}

function getUserValue() {
    var userVal = document.getElementById("userId");
    var a = userVal.value.toLowerCase();
    disId.placeholder = a;
}

passwordField.addEventListener("keypress", (e) => {
    console.log(e.currentTarget.value);
     const value = e.currentTarget.value;
     if(value === 'null' || value === " "){
         loginBtn.disabled = true;
         loginBtn.classList.replace("login-btn","login-btn-dis");

        } else{
        loginBtn.classList.replace("login-btn-dis","login-btn");
        loginBtn.disabled = false;
     }
});