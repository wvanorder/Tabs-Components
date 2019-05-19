const buttonLeft = document.querySelector('.button-left')
const buttonRight = document.querySelector(".button-right")
const boxes = Array.from(document.querySelectorAll('.box'));
var arrayQueue = 0;

buttonRight.addEventListener('click', event => {
    if(arrayQueue < boxes.length-1) {
     arrayQueue +=1;
    } else {
        arrayQueue =0;
    }
 });

buttonRight.addEventListener('click', event => 
boxes.forEach(box => {
    box.classList.add('box-hidden');
}));

buttonRight.addEventListener('click', event => {
    boxes[arrayQueue].classList.remove('box-hidden');
});


buttonLeft.addEventListener('click', event => {
    if(arrayQueue > 0) {
        arrayQueue -=1;
       } else {
           arrayQueue = boxes.length-1;
       }
});


buttonLeft.addEventListener('click', event => 
boxes.forEach(box => {
    box.classList.add('box-hidden');
}));

buttonLeft.addEventListener('click', event => {
    boxes[arrayQueue].classList.remove('box-hidden');
});









