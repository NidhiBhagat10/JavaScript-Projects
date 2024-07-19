const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/* if (!score) {
     score = {
         wins: 0,
         loses: 0,
         ties: 0
     };
 } 
 */

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}


function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        if (computerMove === 'Paper') {
            result = 'You lose';
        }
        if (computerMove === 'Scissor') {
            result = 'You win';
        }
    }

    else if (playerMove === 'Paper') {

        if (computerMove === 'Rock') {
            result = 'You win';
        }
        if (computerMove === 'Paper') {
            result = 'Tie';
        }
        if (computerMove === 'Scissor') {
            result = 'You lose';
        }
    }

    else if (playerMove === 'Scissor') {

        if (computerMove === 'Rock') {
            result = 'You lose';
        }
        if (computerMove === 'Paper') {
            result = 'You win';
        }
        if (computerMove === 'Scissor') {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    }
    if (result === 'You lose') {
        score.losses += 1;
    }
    if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = `${result}`;

    document.querySelector('.js-moves')
        .innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function pickComputerMove() {

    let computerMove = '';

    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "Paper";
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "Scissor";
    }
    return computerMove;
}