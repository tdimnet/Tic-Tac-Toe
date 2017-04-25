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
// Create the player objects needed
function Player(name, image, playerColor, playerClassName, isPlaying) {
    this.name = name;
    this.image = image;
    this.playerColor = playerColor;
    this.playerClassName = playerClassName;
    this.isPlaying = isPlaying;
}
firstPlayer = new Player("Player 1", "url(img/x.svg)", "#3688C3", "box play1", true);
secondPlayer = new Player("Player 2", "url(img/o.svg)", "#FFA000", "box play2", false);

// Accordin to the played who is currently playing, change the style applied in it.
function turnPlayer(boxChoosen) {
    if (firstPlayer.isPlaying == false) {

        console.log('Player one is playing');

        boxChoosen.style.backgroundColor = firstPlayer.playerColor;
        boxChoosen.style.backgroundImage = firstPlayer.image;
        boxChoosen.className = firstPlayer.playerClassName;

        firstPlayer.isPlaying = true;
        player1.className = "players active";

        secondPlayer.isPlaying = false;
        player2.className = "players";

    } else {

        console.log('Player two is playing');

        boxChoosen.style.backgroundColor = secondPlayer.playerColor;
        boxChoosen.style.backgroundImage = secondPlayer.image;
        boxChoosen.className = secondPlayer.playerClassName;

        secondPlayer.isPlaying = true;
        player2.className = "players active";

        firstPlayer.isPlaying = false;
        player1.className = "players";
    }
    winningSituation();
} // End: turnPlayer

function winningSituation() {
    console.log(boxes[0].className, boxes[1].className, boxes[2].className);
    if (boxes[0].className === boxes[1].className && boxes[1].className === boxes[2].className) {
        console.log('it works!');
        console.log(boxes[0].className);
    }
    
}

// When the mouse enters the box, add the style of the particular player
function mouseInBoxes(boxChoosen) {
    if (!(boxChoosen.className === "box play1") && !(boxChoosen.className === "box play2")) {
        if (firstPlayer.isPlaying == false) {
        boxChoosen.style.backgroundColor = firstPlayer.playerColor;
        boxChoosen.style.backgroundImage = firstPlayer.image;

        } else {
            boxChoosen.style.backgroundColor = secondPlayer.playerColor;
            boxChoosen.style.backgroundImage = secondPlayer.image;
        }
    }
} // End: mouseInBoxes

// When the mouse quits the box, remove the style applied by the hovering
function mouseOutBoxes(boxChoosen) {
    if (!(boxChoosen.className === "box play1") && !(boxChoosen.className === "box play2")) {
        boxChoosen.style.backgroundColor = '#EFEFEF';
        boxChoosen.style.backgroundImage = '';
    }
} // End: mouseOutBoxes


window.onload = () => {
    // By default player1 is active (for now ;) )
    player1.className = "players active";
    firstPlayer.isPlaying = true;
}

/*************** Adding the event handlers ***************/
// When the mouse is entering the box and its has not already been played
boxContainer.addEventListener('mouseover', (event) => {
    let targetBox = event.target;
    mouseInBoxes(targetBox);
});

// When the mouse is exiting the box, remove the hover elements decided
boxContainer.addEventListener('mouseout', (event) => {
    let targetBox = event.target;
    mouseOutBoxes(targetBox);
});

// When a box is clicked and its has not been played before. 
boxContainer.addEventListener('click', (event) => {
    let targetBox = event.target;
    if (!(targetBox.className === "box play1") && !(targetBox.className === "box play2")) {
        turnPlayer(targetBox);
    }
});