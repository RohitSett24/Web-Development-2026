let score = JSON.parse(localStorage.getItem('score')) 
|| {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerChoice() {
  let randomNumber = Math.random();

  let compChoice;

  if (randomNumber >= 0 && randomNumber < 1/3) {
    compChoice = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    compChoice = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    compChoice = 'scissors';
  }

  return compChoice;
}

function playGame(myChoice) {
  let compChoice = pickComputerChoice ();
  
  let result = '';

  if (compChoice === myChoice) {
    result = 'Tie.';
  } else if ((myChoice === 'rock' && compChoice === 'scissors') || (myChoice === 'paper' && compChoice === 'rock') || (myChoice === 'scissors' && compChoice === 'paper')) {
    result = 'You win.';
  } else {
    result = 'You lose.';
  }

  if(result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-choices').innerHTML = `You <img class = "move-img" src = "images/${myChoice}-emoji.png">  <img class = "move-img" src = "images/${compChoice}-emoji.png"> Computer`;

  updateScoreElement();
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(function() {
      const myChoice = pickComputerChoice();
      playGame(myChoice);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-btn').innerHTML = 'Stop Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-btn').innerHTML = 'Auto Play';
  }

}