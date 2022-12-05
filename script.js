function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    pSelect = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (pSelect == "Rock" && computerSelection == "Rock") {
        return "You Tied! Rock ties with rock!";
    } else if (pSelect == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats rock!";
    } else if (pSelect == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats scissors!";
    }
    
    if (pSelect == "Paper" && computerSelection == "Paper") {
        return "You Tied! Paper ties with paper";
    } else if (pSelect == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats paper!";
    } else if (pSelect == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats rock!";
    }
    
    if (pSelect == "Scissors" && computerSelection == "Scissors") {
        return "You Tied! Scissors ties with scissors";
    } else if (pSelect == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats scissors!";
    } else if (pSelect == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats paper!";
    }
}

//event listener for buttons
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    console.log(playRound("Rock", getComputerChoice()));
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    console.log(playRound("Paper", getComputerChoice()));
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    console.log(playRound("Scissors", getComputerChoice()));
});


/*
function game() {

    for(let i = 0; i < 5; i++) {
        let a = prompt("What is your choice?");
        console.log(playRound(a, getComputerChoice())); 
    }
}
*/
