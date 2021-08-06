'use strict';
let question = confirm('Угадай число от 1 до 100');
let enter = prompt('Введи число от 1 до 100');
let answer;
let number;
let getStatusAnswer;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let randomNumber = function() {
number = Math.floor(Math.random()*100) + 1;

let getStatusAnswer = function() {
  if(answer > number) {
    alert('Загаданное число меньше');
  } else if(answer < number) {
    alert('Загаданное число больше');
  } else if(!isNumber(answer)) {
    alert('Введи число'); 
  } else if(answer === number) {
    alert('Поздравляю, вы выиграли!');
  } else {
    alert('Игра окончена!');
  }
  getStatusAnswer(answer);
}; 
};

isNumber();
randomNumber(number);
getStatusAnswer(answer);

console.log(answer);