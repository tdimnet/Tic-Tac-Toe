/*************** Targeting the elements already present inside the page ***************/
const start = document.getElementById('start');
const startButton = start.querySelector('.button');

const board = document.getElementById('board');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const boxesElt = document.querySelector('.boxes');
const boxElts = boxesElt.getElementsByClassName('box');

const finish = document.getElementById('finish');
const newGameButton = finish.querySelector('.button');



/*************** Add classes and attributes ***************/




/*************** Removing DOM Elements ***************/
start.style.display = 'none';
board.style.display = 'block';
finish.style.display = 'none';



/*************** Creating the functions needed ***************/




/*************** Adding the event handlers ***************/

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    start.style.display = 'none';
    board.style.display = 'block';
});


boxesElt.addEventListener('click', (event) => {
    let target = event.target;

    
    // target.id = 'checked';
    if (target.className === 'box checked') {
        console.log('foo');
        target.style.backgroundColor = "blue";
    } else {
        console.log('bar');
        target.style.backgroundColor = "red";
    }

    console.log(target)


});


newGameButton.addEventListener('click', (event) => {
    event.preventDefault();
    finish.style.display = 'none';
    board.style.display = 'block';
});