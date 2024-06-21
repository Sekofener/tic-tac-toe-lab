/*-------------------------------- Constants --------------------------------*/

let board;
let turn;
let winner;
let tie;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/

//-------------- Initialize game---------------------

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("reset");
// console.log(squareEls, messageEl);
/*-------------------------------- Functions --------------------------------*/

init();

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const winnerOp = winningCombos[i];
    const sq1 = board[winnerOp[0]];
    const sq2 = board[winnerOp[1]];
    const sq3 = board[winnerOp[2]];
    if (sq1 !== "" || sq2 !== "" || sq3 !== "") {
      if (sq1 === sq2 && sq1 === sq3) {
        winner = true;
        messageEl.textContent = `${turn} won`;
      }
    }
  }
}

function placePiece(index) {
  squareEls[index].innerHTML = turn;
  board[index] = turn;
  console.log(board);
}

function checkForTie() {
  if (checkForWinner()) return;
  console.log(winner);
}

// function switchPlayerTurn(){
// if (winner === false && tie === false) {
//     if(turn === 'O') {
//         turn = 'X';
//         // messageEl.textContent = `${turn}'s turn`;
//     } else if (turn === 'X'){
//         turn = 'O';
//         // messageEl.textContent = `${turn}'s turn`;
//     }
//     }
// }

function switchPlayerTurn() {
  if (winner === true) {
    return;
  } else {
    if (turn === "X") {
      turn = "O";
    } else if (turn === "O") {
      turn = "X";
    }
  }
}
function updateBoard() {
  board.forEach((el, idx) => {
    const squareEl = squareEls[idx];
    squareEl.textContent = el;
  });
}
// function updateBoard() {
//     board.forEach((space, index) => {
//       squareEls[index].innerHTML = board[index];
//     });
//   }

// console.log(updateBoard)

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `${turn}'s turn`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = "Its a tie. Play Again";
  } else if (winner === true && tie === false) {
    messageEl.textContent = `${turn} won`;
  }
}

function render() {
  updateBoard();
  updateMessage();
  // switchPlayerTurn();
}

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = "false";
  tie = "false";
  render();
}

function handleClick(event) {
  const sqIdx = event.target.id;
  if (board[sqIdx] === "X" || board[sqIdx] === "O") {
    return;
  } else if (winner === true) {
    return;
  }
  placePiece(sqIdx);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

/*----------- Event Listeners ----------*/

// squareEls.forEach((square) => {
//     square.addEventListener('click', handleClick);
//    });
resetBtnEl.addEventListener("click", init);

document.querySelector(".board").addEventListener("click", handleClick);
