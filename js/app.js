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
function Player(name, image, isPlaying) {
    this.name = name;
    this.image = image;
    this.isPlaying = isPlaying;
}
firstPlayer = new Player("Player 1", "url(img/x.svg)", true);
secondPlayer = new Player("Player 2", "url(img/o.svg)", false);


function turnPlayer(boxChoosen) {
    if (firstPlayer.isPlaying == false) {
        boxChoosen.style.backgroundImage = firstPlayer.image;
        boxChoosen.className = "box play1"

        firstPlayer.isPlaying = true;
        player1.className = "players active";

        secondPlayer.isPlaying = false;
        player2.className = "players";
    } else {
        boxChoosen.style.backgroundImage = secondPlayer.image;
        boxChoosen.className = "box play2";

        secondPlayer.isPlaying = true;
        player2.className = "players active";

        firstPlayer.isPlaying = false;
        player1.className = "players";
        
    }
}


window.onload = () => {
    // By default player1 is active (for now ;) )
    player1.className = "players active";
    firstPlayer.isPlaying = true;
}

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