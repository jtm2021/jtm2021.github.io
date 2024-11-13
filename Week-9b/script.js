const startGameBtn = document.getElementById("start-game");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundDisplay = document.getElementById("round-display");
const yourScore = document.getElementById('yourScore');
const opponentScore = document.getElementById('opponentScore');

let round = 0;
let userScore = 0;
let computerScore = 0;

startGameBtn.addEventListener('click', () => {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.game-section').style.display = 'flex';
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
    if (round === 2) {
        determineWinner();
    } else {
        const computerBet = this.computerBet();
        this.checkMatch(userBet, computerBet);
        round++;
    }
}

function checkMatch(userBet, computerBet) {
    const message = document.querySelector('.message');
    if (userBet === computerBet) {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ".";
    } else if ((userBet === "scissors" && computerBet === "paper") || (userBet === "rock" && computerBet === "scissors") || (userBet === "paper" && computerBet === "rock")) {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ".";
        userScore++;
    } else {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ".";
        computerScore++;
    }
}

function determineWinner() {
    const result = document.querySelector('.result');
    if (userScore === computerScore) {
        result.style.color = "blue";
        result.textContent = "It's a tie!";
    } else if (userScore > computerScore) {
        result.style.color = "lime";
        result.textContent = "Congratulations! You win!";
    } else {
        result.style.color = "red";
        result.textContent = "Sorry but the Computer Won :(";
    }
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.game-section').style.display = 'none';
}