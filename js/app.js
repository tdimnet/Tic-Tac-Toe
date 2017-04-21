/*************** Targeting the elements already present inside the page ***************/
const start = document.getElementById('start');
const startButton = start.querySelector('.button');

const board = document.getElementById('board');

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const boxContainer = document.querySelector('.boxes');
const boxes = boxContainer.getElementsByClassName('box');

const finish = document.getElementById('finish');
const newGameButton = finish.querySelector('.button');



/*************** Add classes and attributes ***************/




/*************** Changing DOM Elements ***************/
start.style.display = 'none';
board.style.display = 'block';
finish.style.display = 'none';



/*************** Creating the functions needed ***************/
function Player(name, color, isPlaying) {
    this.name = name;
    this.color = color;
    this.isPlaying = isPlaying;
}


function turnPlayer(boxChoosen) {
    // console.log(boxChoosen);
    if (firstPlayer.isPlaying == false) {
        boxChoosen.style.backgroundColor = firstPlayer.color;
        firstPlayer.isPlaying = true;
        player1.className = "players active";

        secondPlayer.isPlaying = false;
        player2.className = "players";
    } else {
        boxChoosen.style.backgroundColor = secondPlayer.color;
        secondPlayer.isPlaying = true;
        player2.className = "players active";

        firstPlayer.isPlaying = false;
        player1.className = "players";
        
    }
}

firstPlayer = new Player("Player 1", "red", true);
secondPlayer = new Player("Player 2", "blue", false);



/*************** Adding the event handlers ***************/
boxContainer.addEventListener('mouseover', (event) => {
    
    let targetBox = event.target;
    // targetBox.style.backgroundColor = "red";
    // player1.className = "players active";
    // player2.className = "players";

});

boxContainer.addEventListener('mouseout', (event) => {

    let targetBox = event.target;
    // targetBox.style.backgroundColor = "#EFEFEF";
    // player1.className = "players";
    // player2.className = "players active";

});



boxContainer.addEventListener('click', (event) => {
    
    let targetBox = event.target;
    targetBox.className = 'box checked'

    turnPlayer(targetBox);
    

});