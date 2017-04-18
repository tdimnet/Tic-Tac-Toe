/*************** Targeting the elements already present inside the page ***************/
const start = document.getElementById('start');
const startButton = start.querySelector('.button');

const board = document.getElementById('board');

const finish = document.getElementById('finish');
const newGameButton = finish.querySelector('.button');



/*************** Removing DOM Elements ***************/
board.style.display = 'none';
finish.style.display = 'none';



/*************** Adding the event handlers ***************/

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    start.style.display = 'none';
    board.style.display = 'block';
});


board.addEventListener('click', () => {
    board.style.display = 'none';
    finish.style.display = 'block';
});

newGameButton.addEventListener('click', (event) => {
    event.preventDefault();
    finish.style.display = 'none';
    board.style.display = 'block';
});