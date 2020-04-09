let playerScore = 0;
let computerScore = 0;
let shuffledElement;
let chosenElement;

const enemyItem = document.getElementById('question');
const myScore = document.getElementById('myScore');
const enemyScore = document.getElementById('enemyScore');

const gameOver = () => {
    if (playerScore === 5){
        alert('Game over. You win, congratulations!');
        backToStart();
    }
    if (computerScore === 5){
        alert('Game over. You are a loser!');
        backToStart();
    }
};

const backToStart = () => {
    playerScore = 0;
    computerScore = 0;
    myScore.innerHTML = '';
    enemyScore.innerHTML = '';
};

const changePic = () => {
   enemyItem.src = 'img/question.svg';
   scoreHandler();
};

const shuffle = () => {
    const someArray = ['img/paper.svg', 'img/rock.svg', 'img/scissors.svg'];
    let imgArray = [];
    let item;

    for (let i = 0; i < someArray.length; i++) {
        imgArray[i] = new Image();
        imgArray[i].src = someArray[i];
    }

    item = imgArray[Math.floor(Math.random()*imgArray.length)];
    enemyItem.src = item.src;
    shuffledElement = item.getAttribute('src');
    setTimeout(changePic, 1000);
};

const scoreHandler = () => {
    const winCondition =
        chosenElement.includes('rock') && shuffledElement.includes('scissors') ||
        chosenElement.includes('paper') && shuffledElement.includes('rock') ||
        chosenElement.includes('scissors') && shuffledElement.includes('paper');
    const loseCondition =
        chosenElement.includes('rock') && shuffledElement.includes('paper') ||
        chosenElement.includes('paper') && shuffledElement.includes('scissors') ||
        chosenElement.includes('scissors') && shuffledElement.includes('rock');

    if (shuffledElement === chosenElement) {
        alert('Draw! No points!')
    }
    if (winCondition) {
        playerScore++;
        myScore.innerHTML = playerScore.toString();
    }
    if (loseCondition) {
        computerScore++;
        enemyScore.innerHTML = computerScore.toString();
    }
    gameOver();
};

document.addEventListener('DOMContentLoaded', () => {
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let reset = document.getElementById('reset');

    const items = [rock, paper, scissors];

    if (rock && paper && scissors && reset) {
        items.map((item) => item.addEventListener('click', () => {
            chosenElement = item.getAttribute('src');
            shuffle();
        }));
        reset.addEventListener('click', () => {
            backToStart();
        });
    }
});
