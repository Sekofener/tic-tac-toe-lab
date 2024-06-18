/*-------------------------------- Constants --------------------------------*/
const COLOR_LOOKUP = {
    '1': 'pink',
    '-1': 'green',
    'null': 'white'
  };
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner ,tie;



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const squareEls = document.querySelector('#message');
console.dir(squareEls)



/*-------------------------------- Functions --------------------------------*/
// const init = () =>{
//     board = ["" ,"", "", "", "", "", "", "", "", ]
//     turn = 'x'
//     winner = false;
//     tie = false;
        render();
// }

const  render = () =>{

}

const updateBoard = () =>{
    squareEls.textContent = 'x'
}
updateBoard();

Infinity();

/*----------------------------- Event Listeners -----------------------------*/



