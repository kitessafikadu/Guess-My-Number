'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';
// // console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess , typeof guess);
 
  if(!guess){

    // document.querySelector('.message').textContent  =  '⛔ No Number Entered!';
    displayMessage('⛔ No Number Entered!');

  } else if(guess === secretNumber){

    // document.querySelector('.message').textContent  =  '👍Correct Number!';
    displayMessage('👍Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#60b347';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if(guess !== secretNumber){
    if(score > 1){
      // document.querySelector('.message').textContent  = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage( guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else{
      // document.querySelector('.message').textContent = '🔥GAME OVER!';
      displayMessage('🔥GAME OVER!');
      document.querySelector('.score').textContent = 0;
    }
  }
//   else if(guess > secretNumber){
//     if(score > 1){
//       document.querySelector('.message').textContent  =  '📈 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else{
//       document.querySelector('.message').textContent = '🔥GAME OVER!';
//       document.querySelector('.score').textContent = 0;
//     }

//   } else if(guess < secretNumber){
//     if(score > 1){
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }else{
//       document.querySelector('.message').textContent = '🔥GAME OVER!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#222';

  document.querySelector('body').style.backgroundColor = '#222';

});



