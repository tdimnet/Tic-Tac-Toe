(function() {

  // The three view needed to play the game

  // The start screen where the player can:
    // Choose their name
    // Choose to player either again an other human or a computer
  const startScreen = `
    <div class="screen screen-start" id="start">
      <header>
        <h1>Tic Tac Toe</h1>
        <div class="player-names">
          <input type="text" placeholder="Player One" id="player-one-name" />
          <input type="text" placeholder="Player Two" id="player-two-name" />
        </div>
        <p class="intro-message" >Please choose your opponent</p>
        <a href="#" class="button btn-opp-human">Human</a>
        <a href="#" class="button btn-opp-computer">Computer</a>
        <a href="#" class="button btn-start">Start Game</a>
      </header>
    </div>
  `;

  // The view which displays:
    // The winner status
    // The possibility to play a new game
  const winScreen = `
    <div class="screen screen-win" id="finish">
      <header>
        <h1>Tic Tac Toe</h1>
        <p class="message">Winner</p>
        <a href="#" class="button">New Game</a>
      </header>
    </div>
  `;


  // The view which displays:
    // The icons for both players
    // The grid of boxes
  const boardScreen = `
    <div class="board" id="board">
      <header>
        <h1>Tic Tac Toe</h1>
        <ul>
          <li class="players" id="player1"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li>
          <li class="players" id="player2"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li>
        </ul>
      </header>
      <ul class="boxes">
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
      </ul>
    </div>
  `;


  // The Player Object
  const playerObject = (function() {
    function playerObject(initialState, initialScore) {
      this.name = initialName || "None";
      this.score = initialScore || 0;
    }

    playerObject.prototype = {

    };

    return playerObject;
  })(); // End: playerObject



  // The Game Object
  const gameObject = (function() {

    // The game object squeletton
    function gameObject() {
      this.players = [
        new playerObject("playerOne", 0, false),
        new playerObject("playerTwo", 0, false)
      ];
      this.currentPlayer = 1;
      this.board = [0,0,0,0,0,0,0,0,0];
    }


    gameObject.prototype = {

      // Initialize a new game
      init: function() {
        this.playerOne = this.players[0].name;
        this.playerTwo = this.players[1].name;
        this.currentPlayer = 1;
        this.board = [0,0,0,0,0,0,0,0,0];
      }, // end: init method

      // The number of moves left before the game is done
      numberOfMovesLeft: function() {
        var count = 0;
        for (let = 0; i < this.board.length; i++) {
          if (this.board[i] === 0) {
            count++;
          }
        }
        return count;
      }, // end: numberOfMovesLeft method

      // Helper function which checks if the cells are the same
      checkCells: function(c1, c2, c3) {
        return (
          (this.board[c1] === this.board[c2])
          && (this.board[c2] === this.board[c3])
          && (this.board[c1] > 0));
      }, // end: checkCells

      winningSituation : function() {
        var win = 0;

          // Horizontal check
        if (this.checkCells(0, 1, 2)) {
          win = this.board[1];
        } else if (this.checkCells(3, 4, 5)) {
          win = this.board[3];
        } else if (this.checkCells(6, 7, 8)) {
          win = this.board[6];
          // Vertical check
        } else if (this.check(0, 3, 6)) {
          win = this.board[0];
        } else if (this.check(1, 4, 7)) {
          win = this.board[1];
        } else if (this.check(2, 5, 8)) {
          win = this.board[2];
          // Diagonal check
        } else if (this.check(0, 4, 8)) {
          win = this.board[0];
        } else if (this.check(2, 4, 6)) {
          win = this.board[2];
        }

        return win;
      }, // end: winningSituation


    }



  })(); // End: gameObject


})();
