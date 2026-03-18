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
    compChoice = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    compChoice = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    compChoice = 'Scissors';
  }

  return compChoice;
}

function playGame(myChoice) {
  let compChoice = pickComputerChoice ();
  
  let result = '';

  if (compChoice === myChoice) {
    result = 'Tie.';
  } else if ((myChoice === 'Rock' && compChoice === 'Scissors') || (myChoice === 'Paper' && compChoice === 'Rock') || (myChoice === 'Scissors' && compChoice === 'Paper')) {
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