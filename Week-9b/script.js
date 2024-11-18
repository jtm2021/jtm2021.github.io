const startGameBtn = document.getElementById("start-game");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundDisplay = document.getElementById("round-display");
const yourScore = document.getElementById('yourScore');
const opponentScore = document.getElementById('opponentScore');
const counter = document.getElementById('counter');
const finalRoundMessage = document.getElementById("final-round-message");

let finalMessage = '';
let round = 1;
let userScore = 0;
let computerScore = 0;

startGameBtn.addEventListener('click', () => {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.game-section').style.display = 'flex';
    counter.style.display = 'flex';
});

rockBtn.addEventListener('click', () => {
    startGame("rock");
})

paperBtn.addEventListener('click', () => {
    startGame("paper");
});

scissorsBtn.addEventListener('click', () => {
    startGame("scissors");
})

function computerBet() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function startGame(userBet) {
    const computerBet = this.computerBet();
    this.checkMatch(userBet, computerBet);

    if (round === 3) {
        determineWinner();
    } else {
        round++;
        roundDisplay.innerHTML = round.toString();
    }

    yourScore.innerHTML = userScore.toString();
    opponentScore.innerHTML = computerScore.toString();
}

function checkMatch(userBet, computerBet) {
    const message = document.querySelector('.message');
    if (userBet === computerBet) {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ". It's a tie for this round.";
        finalMessage = "You chose " + userBet + " and the computer chose " + computerBet + ". It's a tie for the final round.";
    } else if ((userBet === "scissors" && computerBet === "paper") || (userBet === "rock" && computerBet === "scissors") || (userBet === "paper" && computerBet === "rock")) {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ". You win for this round.";
        finalMessage = "You chose " + userBet + " and the computer chose " + computerBet + ". You won the final round.";
        userScore++;
    } else {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ". The computer won this round.";
        finalMessage = "You chose " + userBet + " and the computer chose " + computerBet + ". The computer won the final round.";
        computerScore++;
    }
}

function determineWinner() {
    const result = document.querySelector('.result');
    document.querySelector('.round-counter').style.display = 'none';
    finalRoundMessage.innerHTML = finalMessage;
    finalRoundMessage.style.display = 'flex';
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.game-section').style.display = 'none';
    if (userScore === computerScore) {
        result.style.color = "blue";
        result.textContent = "It's a tie! Total score: " + userScore + "-" + computerScore;
    } else if (userScore > computerScore) {
        result.style.color = "lime";
        result.textContent = "Congratulations! You win with a total score of " + userScore + ".";
    } else {
        result.style.color = "red";
        result.textContent = "Sorry but the Computer Won with a total score of " + computerScore + ".";
    }
}