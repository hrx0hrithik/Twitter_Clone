const secondPart = document.querySelector('.part-two');
const firstPart = document.querySelector('.part-one');
const nextBtn = document.querySelector('.next-btn');
const disId = document.querySelector('#dis-id');
const showPassword = document.querySelector('#show-password');
const passwordField = document.querySelector('#password');


nextBtn.addEventListener('click', function () {
    firstPart.classList.add('active');
    secondPart.classList.add('active');
    console.log('Next');
});

var clicked = false;
function toogle() {
    if (!clicked) {
        clicked = true;
        showPassword.innerHTML = 'visibility_off';
        passwordField.setAttribute("type", "text");
    } else {
        clicked = false;
        showPassword.innerHTML = 'visibility';
        passwordField.setAttribute("type", "password");
    }
}

function getUserValue() {
    var userVal = document.getElementById("userId");
    var a = userVal.value.toLowerCase();
    disId.setAttribute("placeholder", a);
}