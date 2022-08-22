// Define DOM button objects
const spinValOutput = document.querySelector('#spin-value')
const spinButt = document.querySelector('#spin-button')
const oneCashOutput = document.querySelector('#player-one-cash')
const twoCashOutput = document.querySelector('#player-two-cash')
const guessButt = document.querySelector('#guess-button')
const solveButt = document.querySelector('#solve-button')
const newGameButt = document.querySelector('#new-game-button')
const resetButt = document.querySelector('#reset-button')

// console.log(spinVal, spinButt, guessButt, solveButt, newGameButt, resetButt)

//Define global variables 
let turn = 1
let spinVal = 0
let oneCash = 0
let twoCash = 0
let oneFreePlay = false
let twoFreePlay = false
const wheelValues = [5000, 500, 900, 700, 300, 800, 550, 400, 500, 600, 350, 500, 900, 'Bankrupt', 650, 'Free Play', 700, 'Lose a Turn', 800, 500, 450, 500, 300, 'Bankrupt']
const puzzleOptions = ['BACON', 'JUMPSUIT']



// Innertext
spinValOutput.innerText = '--'
oneCashOutput.innerText = '$' + oneCash
twoCashOutput.innerText = '$' + twoCash



// Game functions 

// Change player turn
function changeTurn() {
    if (turn === 1) {
        turn = 2
    } else {
        turn = 1
    }
}

// Add cash to player score
function addCash(cash) {
    if (turn === 1) {
        oneCash += cash
        oneCashOutput.innerText = '$' + oneCash
    } else if (turn === 2) {
        twoCash += cash
        twoCashOutput.innerText = '$' + twoCash
        
    }
}

// Generate random value for spin
function randomSpinVal() {
    return Math.floor(Math.random() * 24)
}

// Generate random value for puzzle
function randomPuzzleVal() {
    return Math.floor(Math.random() * 2)
}


// Message board functions
// Bankrupt
// Lose a turn
// Free play

// Generate spin dollar amount

// Generate puzzle

// Reveal letters

// Event Listeners

// Spin Button
spinButt.addEventListener('click', function(e) {
    let cashIndexNum = randomSpinVal()
    // console.log(cashIndexNum)
    if (wheelValues[cashIndexNum] === 'Lose a Turn') {
        changeTurn()
        spinValOutput.innerText = wheelValues[cashIndexNum]
    } else if (wheelValues[cashIndexNum] === 'Bankrupt') {
        if (turn === 1) {
            oneCash = 0
            oneCashOutput.innerText = '$' + oneCash
        } else if (turn === 2) {
            twoCash = 0
            twoCashOutput.innerText = '$' + twoCash
        } 
        spinValOutput.innerText = wheelValues[cashIndexNum]
        changeTurn()
    } else if  (wheelValues[cashIndexNum] === 'Free Play') { // NEED TO UPDATE THIS!!!!!!
        spinVal = 0;
        spinValOutput.innerText = wheelValues[cashIndexNum]
        // if (turn === 1) {
        //     oneFreePlay = true;
        // } else if (turn === 2) {
        //     twoFreePlay = true;
        // }
    } else {
        spinVal = wheelValues[cashIndexNum]
        spinValOutput.innerText = '$' + wheelValues[cashIndexNum]
    }
})

// Function to select a new Puzzle
function newPuzzle() {
    let puzzIndexNum = randomPuzzleVal()
    let currentPuzzle = puzzleOptions[puzzIndexNum]
    return currentPuzzle
}

// function to create puzzle divs
function generatePuzzleLetters(puzzle) {
    for (i = 0; i < puzzle.length; i++) {
        const newTile
    }
}



