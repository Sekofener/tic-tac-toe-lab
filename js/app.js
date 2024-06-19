/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
console.dir(squareEls)

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner ,tie;



/*------------------------ Cached Element References ------------------------*/
// const squareEls = document.querySelectorAll('.sqr');
// const squareEls = document.querySelector('#message');
// console.dir(squareEls)



/*-------------------------------- Functions --------------------------------*/
function init() =>{
    console.log(init)

const board = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
board = ["" ,"", "", "", "", "", "", "", "", ]
turn = 'X'
winner = false;
tie = false;
render()
}


function render(){

}
function updateBoard(){
    updateBoard.forEach(squareEls => {
        console.log(squareEls)
    });
}
function updateMessage(){
    
}




// const  render = () =>{

// }

// const updateBoard = () =>{
//     squareEls.textContent = 'x'
// }
// updateBoard();

// Init();

/*----------------------------- Event Listeners -----------------------------*/



