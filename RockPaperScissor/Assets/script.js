'use strict';
window.onload = () => {
  const playerScore_span = document.getElementById('player-score');
  const cpuScore_span = document.getElementById('cpu-score');
  const rock_div = document.getElementById('rock');
  const paper_div = document.getElementById('paper');
  const scissors_div = document.getElementById('scissors');
  const moves = ['rock', 'paper', 'scissors'];
  let resultArray;
  let result;

  rock_div.addEventListener('click', () => {
    resultArray = decideOutput('rock');
    result = resultArray.userMove;
    createOutputMessage(result);
    rock_div.classList.add('selected');
    paper_div.classList.remove('selected');
    scissors_div.classList.remove('selected');
  });
  paper_div.addEventListener('click', () => {
    resultArray = decideOutput('paper');
    result = resultArray.userMove;
    createOutputMessage(result);
    paper_div.classList.add('selected');
    rock_div.classList.remove('selected');
    scissors_div.classList.remove('selected');
  });
  scissors_div.addEventListener('click', () => {
    resultArray = decideOutput('scissors');
    console.log(resultArray);
    result = resultArray.userMove;
    createOutputMessage(result);
    scissors_div.classList.add('selected');
    rock_div.classList.remove('selected');
    paper_div.classList.remove('selected');
  });

  function cpuRoll(moves) {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
  }

  let gameResult = {
    playerScore: 0,
    cpuScore: 0,
    message: '',
    userMove: '',
    cpuMove: '',
  };

  function decideOutput(userMove) {
    let cpuMove = cpuRoll(moves);

    if (cpuMove === userMove) {
      gameResult.message = `DRAW!`;
    } else if ((userMove === 'scissors' && cpuMove === 'paper') || (userMove === 'rock' && cpuMove === 'scissors') || (userMove === 'paper' && cpuMove === 'rock')) {
      gameResult.message = `YOU WIN!`;
      gameResult.playerScore++;
    } else {
      gameResult.message = `YOU LOSE!`;
      gameResult.cpuScore++;
    }

    gameResult.userMove = userMove;
    gameResult.cpuMove = cpuMove;

    createMoveMessage();
    counterScores();

    return { ...gameResult };
  }

  function createOutputMessage() {
    const resultDiv = document.querySelector('#result');
    const checkP = resultDiv.querySelector('p');
    if (checkP != null) {
      resultDiv.removeChild(resultDiv.firstChild);
    }
    const pTag = document.createElement('p');
    const text = document.createTextNode(gameResult.message);
    pTag.appendChild(text);
    pTag.classList.add('animated-text');
    pTag.classList.add('message');
    // pTag.innerHTML = message;
    resultDiv.appendChild(pTag);
  }

  function createMoveMessage() {
    const divResults = document.getElementById('result');
    divResults.innerHTML = ` <div class="score "> cpu choose <span id="cpu-move"> ${gameResult.cpuMove}</span></div>`;
  }
  // }<div class="score" id="player-move">${gameResult.userMove}</div> -

  function counterScores() {
    const playerScore = document.getElementById('player-score');
    playerScore.innerHTML = gameResult.playerScore;
    const cpuScore = document.getElementById('cpu-score');
    cpuScore.innerHTML = gameResult.cpuScore;
  }
};
