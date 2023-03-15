'use strict';
window.onload = () => {
  const playerScore_span = document.getElementById('player-score');
  const cpuScore_span = document.getElementById('cpu-score');
  const rock_div = document.getElementById('rock');
  const paper_div = document.getElementById('paper');
  const scissors_div = document.getElementById('scissors');
  let resultArray;
  let result;

  rock_div.addEventListener('click', () => {
    resultArray = decideOutput('rock');
    result = resultArray[0];
    createOutput(result);
  });
  paper_div.addEventListener('click', () => {
    resultArray = decideOutput('paper');
    result = resultArray[0];
    createOutput(result);
  });
  scissors_div.addEventListener('click', () => {
    resultArray = decideOutput('scissors');
    result = resultArray[0];
    createOutput(result);
  });

  function cpuRoll(moves) {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
  }

  function decideOutput(userMove) {
    let playerScore = 0;
    let cpuScore = 0;
    let message = '';
    let cpuMove = cpuRoll(['rock', 'paper', 'scissors']);
    if (cpuMove === userMove) {
      message = `DRAW`;
    } else if (userMove === 'scissors' && cpuMove === 'paper') {
      message = `Scissors cut Paper  YOU WIN!`;
      playerScore++;
    } else if (userMove === 'rock' && cpuMove === 'scissors') {
      message = `Rock breaks Scissors  YOU WIN!`;
      playerScore++;
    } else if (userMove === 'paper' && cpuMove === 'rock') {
      message = `Paper covers Rock  YOU WIN!`;
      playerScore++;
    } else if (userMove === 'paper' && cpuMove === 'scissors') {
      message = `Scissors cut Paper  YOU LOSE!`;
      cpuScore++;
    } else if (userMove === 'scissors' && cpuMove === 'rock') {
      message = `Rock breaks Scissors  YOU LOSE!`;
      cpuScore++;
    } else if (userMove === 'rock' && cpuMove === 'paper') {
      message = `Paper covers Rock  YOU LOSE!`;
      cpuScore++;
    }
    return [message, playerScore, userMove, cpuScore, cpuMove];
  }

  function createOutput(message) {
    const resultDiv = document.querySelector('.result');
    const checkP = resultDiv.querySelector('p');
    if (checkP != null) {
      resultDiv.removeChild(resultDiv.firstChild);
    }
    const pTag = document.createElement('p');
    const text = document.createTextNode(message);
    pTag.appendChild(text);
    // pTag.innerHTML = message;
    resultDiv.appendChild(pTag);
  }
};
