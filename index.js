'use strict';
let question = confirm('Угадай число от 1 до 100');
let enter = prompt('Введи число от 1 до 100');
let answer = 0;
let randomNumber = Math.floor(Math.random()*100) + 1;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getStatusAnswer = function() {
  
  if(answer > randomNumber) {
    alert('Загаданное число меньше');
  } else if(answer < randomNumber) {
    alert('Загаданное число больше');
  } else if(!isNumber(answer)) {
    alert('Введи число'); 
  } else if(answer === randomNumber) {
    alert('Поздравляю, вы выиграли!');
  } else {
    alert('Игра окончена!');
  }
  getStatusAnswer(answer);
}; 

isNumber();

console.log(answer);