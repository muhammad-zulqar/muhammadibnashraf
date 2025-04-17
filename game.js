const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById("result-text");

    if (playerChoice === computerChoice) {
        resultText.textContent = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}
