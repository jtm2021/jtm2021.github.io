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

    if (userBet === computerBet) {
        console.log("Computer chose " + computerBet);
        console.log("It's a tie!");
    } else if ((userBet === "scissors" && computerBet === "paper") || (userBet === "rock" && computerBet === "scissors") || (userBet === "paper" && computerBet === "rock")) {
        console.log("Computer chose " + computerBet);
        console.log("You win!");
    } else {
        console.log("Computer chose " + computerBet);
        console.log("Haha computer wins!");
    }
}