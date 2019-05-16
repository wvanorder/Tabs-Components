const buttonLeft = document.querySelector('.button-left')
const buttonRight = document.querySelector(".button-right")
const boxes = document.querySelectorAll('.box');


buttonLeft.addEventListener('click', event => 
Array.from(boxes).forEach(box => {
    box.classList.toggle('box-hidden');
}));

buttonRight.addEventListener('click', event => 
Array.from(boxes).forEach(box => {
    box.classList.toggle('box-hidden');
}));