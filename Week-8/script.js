const startGameBtn = document.getElementById("start-game");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

startGameBtn.addEventListener('click', () => {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.game-section').style.display = 'flex';
});

rockBtn.addEventListener('click', () => {
    console.log("rock");
})

paperBtn.addEventListener('click', () => {
    console.log("paper");
})

scissorsBtn.addEventListener('click', () => {
    console.log("scissors");
})