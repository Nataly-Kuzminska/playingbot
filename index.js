'use strict';
let question = confirm('Угадай число от 1 до 100');


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getStatusAnswer = function() {
  let answer = 0;
  if(answer > 100) {
    alert('Загаданное число меньше');
  } else if(answer < 0) {
    alert('Загаданное число больше');
  } else if(!isNumber(answer)) {
    alert('Введи число'); 
  } else if(answer > 0 && answer < 100) {
    alert('Поздравляю, вы выиграли!');
  } else {
    alert('Игра окончена!');
  }
}; 

isNumber();
getStatusAnswer(answer);