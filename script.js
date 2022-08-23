// Define DOM button objects
const spinValOutput = document.querySelector('#spin-value')
const spinButt = document.querySelector('#spin-button')
const categoryOutput = document.querySelector('#category-output')
const oneCashOutput = document.querySelector('#player-one-cash')
const twoCashOutput = document.querySelector('#player-two-cash')
const messageBoard = document.querySelector('#message-board-text')
const guessButt = document.querySelector('#guess-button')
const solveButt = document.querySelector('#solve-button')
const newGameButt = document.querySelector('#new-game-button')
const resetButt = document.querySelector('#reset-button')
const firstWordOutput = document.getElementById('word-container-one')
const secondWordOutput = document.getElementById('word-container-two')
const thirdWordOutput = document.getElementById('word-container-three')
const fourthWordOutput = document.getElementById('word-container-four')

//Define global variables 
let turn = 1
let spinVal = 0
let oneCash = 0
let twoCash = 0
let oneFreePlay = false
let twoFreePlay = false
const wheelValues = [5000, 500, 900, 700, 300, 800, 550, 400, 500, 600, 350, 500, 900, 'Bankrupt', 650, 'Free Play', 700, 'Lose a Turn', 800, 500, 450, 500, 300, 'Bankrupt']
const puzzleOptions = ['BACON', 'JUMPSUITS ARE COOL', 'I LOVE TO CODE', 'SOFTWARE DEVELOPMENT']
const puzzleOps = {
    word1: {
        category: 'Thing',
        word: 'CREAM OF CHICKEN SOUP'
    },
    word2: {
       category: 'Clothing', 
       word: 'JUMPSUITS'
    },
    word3: {
        category: 'Family',
        word: 'GRANDMA AND GRANDPA'
    },
    word4: {
        category: 'Thing',
        word: 'THE BILL OF RIGHTS',
    },
    word5: {
        category: 'Phrase',
        word: 'GONE BUT NOT FORGOTTEN'
    },
    word6: {
        category: 'Thing',
        word: 'THE NATIONAL ANTHEM',
    },
    word7: {
        category: 'Occupation',
        word: 'SKI INSTRUCTOR',
    },
    word8: {
        category: 'Thing',
        word: 'WHITE ELEPHANT GIFT EXCHANGE',
    },
    word9: {
        category:'Person',
        word: 'SKI INSTRUCTOR',
    },
    
}


let currentPuzzleObject = ""
let currentPuzzleCategory = ""
let currentPuzzle =""
let currentPuzzleArray = []
let firstWord = ""
let secondWord = ""
let thirdWord = ""
let fourthWord = ""




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
    return Math.floor(Math.random() * 4)
}


// Message board functions
// Game start
function gameStartMessage() {
    messageBoard.innerText = `Player 1, it's your turn! Go ahead and spin the wheel!`
}
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

// Select random puzzle
function getRandomPuzzle(puzzleOps) {
    let puzzleTest = Object.keys(puzzleOps);
    currentPuzzleObject = puzzleTest[Math.floor(Math.random() * puzzleTest.length)]
    currentPuzzle = puzzleOps[currentPuzzleObject].word
    currentPuzzleCategory = puzzleOps[currentPuzzleObject].category
}

// Function to select a new Puzzle
function generateNewPuzzle(puzzleOps) {
    getRandomPuzzle(puzzleOps)
    console.log(currentPuzzleCategory)
    console.log(currentPuzzle)

   
    // let puzzIndexNum = randomPuzzleVal()
    // let currentPuzzle = puzzleOptions[puzzIndexNum]
    currentPuzzleArray = currentPuzzle.split(" ")
    console.log(currentPuzzleArray.length)
    // Create word buckets
    
    firstWord = currentPuzzleArray[0]
    console.log(firstWord)
    if (currentPuzzleArray.length >= 2) {
        secondWord = currentPuzzleArray[1]
        console.log('there is more than one word')
        console.log(`and that word is ${secondWord}`)
        if (currentPuzzleArray.length >= 3) {
            thirdWord = currentPuzzleArray[2]
    if (currentPuzzleArray.length >= 4) {
        fourthWord = currentPuzzleArray[3]
    }}}
}

generateNewPuzzle(puzzleOps)

// function to create puzzle divs
function generatePuzzleLetters(first, second, third, fourth) {
    for (i = 0; i < first.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        newSquareContainer.setAttribute('id',`first-${i}`)
        firstWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.style.color = 'whitesmoke'
        newTileContainer.innerText = first.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    for (i = 0; i < second.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        newSquareContainer.setAttribute('id',`second-${i}`)
        secondWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.style.color = 'whitesmoke'
        newTileContainer.innerText = first.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    for (i = 0; i < third.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        newSquareContainer.setAttribute('id',`third-${i}`)
        thirdWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.style.color = 'whitesmoke'
        newTileContainer.innerText = first.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    for (i = 0; i < fourth.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        newSquareContainer.setAttribute('id',`fourth-${i}`)
        fourthWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.style.color = 'whitesmoke'
        newTileContainer.innerText = first.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    categoryOutput.innerText = `Category: ${currentPuzzleCategory}`
    gameStartMessage()

}





newGameButt.addEventListener('click', (e) => {
    generateNewPuzzle(puzzleOps);
    generatePuzzleLetters(firstWord, secondWord, thirdWord, fourthWord)
})

