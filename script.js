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


//div to display results
const container = document.querySelector('#results');

//p element for result of game
const contentP = document.createElement('p');
contentP.classList.add('contentP');
container.appendChild(contentP);
contentP.textContent = "Click on a button below to make your choice!";

//div to display tally
const tallyDiv = document.querySelector('#tally');

//initialize tally
let tally = 0;
let cpuTally = 0;

//p element for tally
const tallyP = document.createElement('p');
tallyP.classList.add('tallyP');
tallyP.textContent = `0 - 0`;
tallyDiv.appendChild(tallyP);


function playRound(playerSelection, computerSelection) {
    pSelect = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (pSelect == "Rock" && computerSelection == "Rock") {
        contentP.textContent = "You Tied! Rock ties with rock!";
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (pSelect == "Rock" && computerSelection == "Paper") {
        contentP.textContent = "You Lose! Paper beats rock!";
        ++cpuTally;
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (pSelect == "Rock" && computerSelection == "Scissors") {
        contentP.textContent = "You Win! Rock beats scissors!";
        ++tally;    
        tallyP.textContent = `${tally} - ${cpuTally}`;
    }
    
    if (pSelect == "Paper" && computerSelection == "Paper") {
        contentP.textContent = "You Tied! Paper ties with paper";
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (pSelect == "Paper" && computerSelection == "Scissors") {
        contentP.textContent = "You Lose! Scissors beats paper!";
        ++cpuTally;
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (pSelect == "Paper" && computerSelection == "Rock") {
        contentP.textContent = "You Win! Paper beats rock!";
        ++tally;
        tallyP.textContent = `${tally} - ${cpuTally}`;
    }
    
    if (pSelect == "Scissors" && computerSelection == "Scissors") {
        contentP.textContent = "You Tied! Scissors ties with scissors!";
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (pSelect == "Scissors" && computerSelection == "Rock") {
        contentP.textContent = "You Lose! Rock beats scissors!";
        ++cpuTally;
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (pSelect == "Scissors" && computerSelection == "Paper") {
        contentP.textContent = "You Win! Scissors beats paper!";
        ++tally;
        tallyP.textContent = `${tally} - ${cpuTally}`;
    }
    if (tally === 5) {
        alert("You Win!");
        tally = 0;
        cpuTally = 0;
        tallyP.textContent = `${tally} - ${cpuTally}`;
    } else if (cpuTally === 5) {
        alert("You Lose!");
        tally = 0;
        cpuTally = 0;
    }   
}


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

