const startGameBtn = document.getElementById("start-game");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

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
    const computerBet = this.computerBet();
    const message = document.querySelector('.message');
    const result = document.querySelector('.result');
    if (userBet === computerBet) {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ".";
        result.textContent = "It's a tie!";
    } else if ((userBet === "scissors" && computerBet === "paper") || (userBet === "rock" && computerBet === "scissors") || (userBet === "paper" && computerBet === "rock")) {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ".";
        result.textContent = "You win!";
    } else {
        message.textContent = "You chose " + userBet + " and the computer chose " + computerBet + ".";
        result.textContent = "Haha Computer Wins!";
    }
}