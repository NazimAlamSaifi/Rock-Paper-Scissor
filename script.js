let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const resultsDiv = document.getElementById("results");
let humanChoice = null;

function getComputerChoice() {
  let output = Math.ceil(Math.random() * 3);
  return output;
}

rockButton.addEventListener("click", () => {
  humanChoice = 1;
  playRound();
});

paperButton.addEventListener("click", () => {
  humanChoice = 2;
  playRound();
});

scissorButton.addEventListener("click", () => {
  humanChoice = 3;
  playRound();
});

function playRound() {
  let computerChoice = getComputerChoice();

  let choices = ["Rock", "Paper", "Scissors"];
  let humanText = choices[humanChoice - 1];
  let computerText = choices[computerChoice - 1];

  // Clear previous results and start fresh for the round
  resultsDiv.innerHTML = "<h2>Game Results</h2>";

  // Display choices
  const choicesHTML = `
	  <p><strong>You chose:</strong> ${humanText}</p>
	  <p><strong>AI chose:</strong> ${computerText}</p>`;
  resultsDiv.innerHTML += choicesHTML;

  // Determine round outcome
  let outcome = "";
  if (humanChoice === computerChoice) {
    outcome = `<p class="tie">It's a Tie!</p>`;
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    humanScore++;
    outcome = `<p class="win">You Win!</p>`;
  } else {
    computerScore++;
    outcome = `<p class="lose">You Lose!</p>`;
  }
  resultsDiv.innerHTML += outcome;

  // Update scores dynamically
  const scoresHTML = `
	  <p><strong>Your Score:</strong> ${humanScore}</p>
	  <p><strong>AI Score:</strong> ${computerScore}</p>`;
  resultsDiv.innerHTML += scoresHTML;

  // Check if the game has ended
  checkGameEnd();
}

function checkGameEnd() {
  if (humanScore === 5) {
    resultsDiv.innerHTML += `<p class="win">🎉 Congratulations! You won the game!</p>`;
    resetGame();
  } else if (computerScore === 5) {
    resultsDiv.innerHTML += `<p class="lose">🤖 AI won the game! Better luck next time!</p>`;
    resetGame();
  }
}

function resetGame() {
	humanScore = 0;
	computerScore = 0;
	resultsDiv.innerHTML = `<p>Game reset! Play again!</p>`;
  }
  

// function getHumanChoice() {
//   let output =
//     "Type Rock, Paper, or Scissor\n(Guess the right answer to win against the AI)";
//   output = output.trim().toLowerCase();

//   if (output === "rock") {
//     return 1;
//   } else if (output === "paper") {
//     return 2;
//   } else if (output === "scissor") {
//     return 3;
//   } else {
//     alert("Invalid choice! Please type Rock, Paper, or Scissor correctly.");
//     return null;
//   }
//
