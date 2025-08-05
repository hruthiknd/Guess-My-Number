'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    
    //when there is no onput
    if (!guess) {
        displayMessage('No number!');
    }
    //when player wins
    else if (guess === secretnumber) {
        
        displayMessage('Correct Number!🎉'); 
        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;


        }
         
    }
        //Instead of re-writing the code two times I used ternary operator. You can skip below 2 steps if you use this 

    // else if (guess != secretnumber) {
    //      if (score > 1) {
    //           document.querySelector('.message').textContent = guess>secretnumber?'Too high!📈':'Too low!📉';
    //            score--;
    //         document.querySelector('.score').textContent = score;
    //       } else {
    //           document.querySelector('.message').textContent = 'You lost the game!💥';
    //         document.querySelector('.score').textContent = 0;
    //       }
        //     }
        
         //when guess is too high
    else if (guess > secretnumber) {
          if (score > 1) {
              displayMessage('Too high!📈');
               score--;
            document.querySelector('.score').textContent = score;
          } else {
              document.querySelector('.message').textContent = 'You lost the game!💥';
            document.querySelector('.score').textContent = 0;
          }
     
    }
         //when guess is too low
    else if (guess < secretnumber) {
         if (score > 1) {
             displayMessage('Too low!📉');
             score--;
             document.querySelector('.score').textContent = score;
             
         } else {
             document.querySelector('.message').textContent = 'You lost the game!💥';
            document.querySelector('.score').textContent = 0;
        }
    }


})
//redirect after clicking Again! button and reset all initial values 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});