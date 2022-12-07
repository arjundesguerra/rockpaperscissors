//div to display results
const container = document.querySelector('#results');

//p element for result of game
const contentP = document.createElement('p');
contentP.classList.add('contentP');
container.appendChild(contentP);




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
        contentP.textContent = "You Tied! Rock ties with rock!";
    } else if (pSelect == "Rock" && computerSelection == "Paper") {
        contentP.textContent = "You Lose! Paper beats rock!";
    } else if (pSelect == "Rock" && computerSelection == "Scissors") {
        contentP.textContent = "You Win! Rock beats scissors!";
    }
    
    if (pSelect == "Paper" && computerSelection == "Paper") {
        contentP.textContent = "You Tied! Paper ties with paper";
    } else if (pSelect == "Paper" && computerSelection == "Scissors") {
        contentP.textContent = "You Lose! Scissors beats paper!";
    } else if (pSelect == "Paper" && computerSelection == "Rock") {
        contentP.textContent = "You Win! Paper beats rock!";
    }
    
    if (pSelect == "Scissors" && computerSelection == "Scissors") {
        contentP.textContent = "You Tied! Scissors ties with scissors!";
    } else if (pSelect == "Scissors" && computerSelection == "Rock") {
        contentP.textContent = "You Lose! Rock beats scissors!";
    } else if (pSelect == "Scissors" && computerSelection == "Paper") {
        contentP.textContent = "You Win! Scissors beats paper!";
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
