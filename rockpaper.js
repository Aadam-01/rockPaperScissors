// console.log("Hello, word")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    if (choice === null) return null;
    return choice.toLowerCase();
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (!humanChoice || !computerChoice) return null;

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${capitalize(humanChoice)}`);
            return 'tie';
        }

        const winsAgainst = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winsAgainst[humanChoice] === computerChoice) {
            humanScore += 1;
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
            return 'human';
        } else {
            computerScore += 1;
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
            return 'computer';
        }
    }

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        if (!humanChoice) {
            console.log('Game cancelled.');
            return;
        }
        const computerChoice = getComputerChoice();
        console.log(`Round ${round}:`);
        playRound(humanChoice, computerChoice);
        console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`Final result: You win! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Final result: You lose! ${computerScore} to ${humanScore}`);
    } else {
        console.log(`Final result: It's a tie! ${humanScore} to ${computerScore}`);
    }
}

// Start the 5-round game
playGame();

