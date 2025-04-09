let humanScore = 0;
      let computerScore = 0;
      function getComputerChoice() {
        let output = Math.ceil(Math.random() * 3);
        return output;
      }

      function getHumanChoice() {
        let output = prompt(
          "Type Rock, Paper, or Scissor\n(Guess the right answer to win against the AI)"
        );
        output = output.trim().toLowerCase();

        if (output === "rock") {
          return 1;
        } else if (output === "paper") {
          return 2;
        } else if (output === "scissor") {
          return 3;
        } else {
          alert("Invalid choice! Please type Rock, Paper, or Scissor correctly.");
          return null; 
        }
      }

      function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === null) {
          return; // Skip this round if human input is invalid
        }

        let choices = ["Rock", "Paper", "Scissors"];
        let humanText = choices[humanChoice - 1];
        let computerText = choices[computerChoice - 1];

        alert(`You chose: ${humanText}\nAI chose: ${computerText}`);

        if (humanChoice === computerChoice) {
          alert(`${humanText} vs ${computerText} = It's a Tie!`);
        } else if (
          (humanChoice === 1 && computerChoice === 3) || // Rock beats Scissors
          (humanChoice === 2 && computerChoice === 1) || // Paper beats Rock
          (humanChoice === 3 && computerChoice === 2)    // Scissors beat Paper
        ) {
          ++humanScore;
          alert(`${humanText} vs ${computerText} = You Win!`);
        } else {
          ++computerScore;
          alert(`${humanText} vs ${computerText} = You Lose!`);
        }

        alert(`Scores:\nYour Score: ${humanScore}\nAI Score: ${computerScore}`);
      }

      function playGame() {
        while (humanScore < 5 && computerScore < 5) {
          playRound(); // Play a single round
        }


        if (humanScore === 5) {
          alert("🎉 Congratulations! You won the game!");
        } else {
          alert("🤖 AI won the game! Better luck next time!");
        }
      }

      
      playGame();