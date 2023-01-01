const secondPart = document.querySelector('.part-two');
const firstPart = document.querySelector('.part-one');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', function(){
    firstPart.classList.add('active');
    secondPart.classList.add('active');
    console.log('clicked');
});