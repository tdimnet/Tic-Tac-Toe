/*************** Targeting the elements already present inside the page ***************/
const board = document.getElementById('board');



/*************** Removing DOM Elements ***************/
board.style.display = 'none';



/*************** Adding the event handlers ***************/
window.onload = () => {
    console.log(board);
};



/*************** Test ***************/
const startPage = document.getElementById('start');

startPage.addEventListener('click', () => {
    startPage.style.display = 'none';
    board.style.display = 'block';
});