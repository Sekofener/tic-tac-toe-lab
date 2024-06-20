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
    [2, 4, 6]
    

]
  
/*---------------------------- Variables (state) ----------------------------*/

//-------------- Initialize game---------------------


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')
console.log(squareEls, messageEl);
/*-------------------------------- Functions --------------------------------*/
function placePiece (index) {
    board[index] = turn;
    console.log(board);
}

function handleClick(event) {
    const sqIdx = event.target.id;
    if (board[sqIdx] === 'X' || board[sqIdx] === 'O' && winner === true) {
        return; 
    }
   placePiece(sqIdx);
    render();
}

for (let i = 0; i < winningCombos.length; i++) {
    const winnerOp = winningCombos[i];
    const sq1 = board[winnerOp[0]];
    const sq2 = board[winnerOp[1]];
    const sq3 = board[winnerOp[2]];
    if (sq1 !== '' || sq2 !== '' || sq3 !== '') {
        if (sq1 === sq2 && sq1 === sq3) {
            winner = true;
            msgEl.textContent = `${turn} won`;
        }
    }
}

function updateBoard () {
    board.forEach((el, idx) => {
        const squareEl = squareEls[idx];
        squareEl.textContent = el;
    })
}

console.log(updateBoard)

function updateMessage () {
    if (winner === false && tie === false) {
        if(turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X'
        }
        msgEl.textContent = `${turn}'s turn`;
    } else if (winner === false && tie === true) {
        msgEl.textContent = 'Its a tie. Play Again';
    } else {
        msgEl = `${turn} turn`;
      }  else { (winner === true && tie === false) {
            msgEl.textContent = `${turn} won`;
    }}



function render () {
    updateBoard(); 
    updateMessage();
}

function init () {
    board = ['x', '', 'O', '', '', '', '', '', '',];
    turn = 'X';
    winner = 'false';
    tie = 'false';
    render ();
}
init()




/*----------- Event Listeners ----------*/

squareEls.forEach((square) => {
    square,addEventListener('click', handleClick);
});
init()
    



