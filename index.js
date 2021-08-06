'use strict';
let question = confirm('Угадай число от 1 до 100');

let getStatusAnswer;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let randomNumber = function() {
let number = Math.floor(Math.random()*100) + 1;

let getStatusAnswer = function() {
  let answer = prompt('Введи число от 1 до 100');
  console.log(number);
  console.log(answer);
  if(answer === null) {
    alert('Игра окончена');
  } else if(+answer > +number) {
    alert('Загаданное число меньше');
    getStatusAnswer();
  } else if(+answer < +number) {
    alert('Загаданное число больше');
    getStatusAnswer();
  } else if(!isNumber(+answer)) {
    alert('Введи число'); 
    getStatusAnswer();
  } else if(+answer === +number) {
    alert('Поздравляю, вы выиграли!');
  } 

};

  getStatusAnswer();
};


randomNumber();
