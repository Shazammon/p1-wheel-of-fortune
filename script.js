// Stack overflow said to add thi in
// const nameMap = new Map([
//     [21, ['Monterey','12']],
//     [20, ['Big Sur', '11']],
//     [19, ['Catalina', '10.15']],
//     [18, ['Mojave', '10.14']],
//     [17, ['High Sierra', '10.13']],
//     [16, ['Sierra', '10.12']],
//     [15, ['El Capitan', '10.11']],
//     [14, ['Yosemite', '10.10']],
//     [13, ['Mavericks', '10.9']],
//     [12, ['Mountain Lion', '10.8']],
//     [11, ['Lion', '10.7']],
//     [10, ['Snow Leopard', '10.6']],
//     [9, ['Leopard', '10.5']],
//     [8, ['Tiger', '10.4']],
//     [7, ['Panther', '10.3']],
//     [6, ['Jaguar', '10.2']],
//     [5, ['Puma', '10.1']]
// ]);

// Define DOM button objects
const spinValOutput = document.querySelector('#spin-value')
const wheelOfFortune = document.querySelector('#wheel')
const spinButt = document.querySelector('#spin-button')
const puzzleBoard = document.querySelector('#puzzle-board')
const categoryOutput = document.querySelector('#category-output')
const oneCashOutput = document.querySelector('#player-one-cash')
const twoCashOutput = document.querySelector('#player-two-cash')
const oneFreePlayOutput = document.querySelector('#player-one-free-play')
const twoFreePlayOutput = document.querySelector('#player-two-free-play')
const messageBoard = document.querySelector('#message-board-text')
const guessInput = document.querySelector('#input')
const guessButt = document.querySelector('#guess-button')
const guessForm = document.querySelector('#guess-form')
const solveButt = document.querySelector('#solve-button')
const solveInput = document.querySelector('#solve-input')
const submitButt = document.querySelector('#submit-button')
const solveForm = document.querySelector('#solve-form')
const newRoundButt = document.querySelector('#new-round-button')
const resetButt = document.querySelector('#reset-button')
const firstWordOutput = document.getElementById('word-container-one')
const secondWordOutput = document.getElementById('word-container-two')
const thirdWordOutput = document.getElementById('word-container-three')
const fourthWordOutput = document.getElementById('word-container-four')
let allTiles ;
let allSquares ;
let interval ;
let wheelDegrees = 0
// const pause = setTimeout(stopWheelSpin, 1500)
console.log(wheelOfFortune)

//Define global variables 
let turn = 1
let nextTurn = 2
let spinVal = 0
// need to update this with Arrays!! it will be so much better
let oneCash = 0
let oneCumCash = 0
let twoCumCash = 0
let twoCash = 0
let oneFreePlay = 0
let twoFreePlay = 0
let numPlayers = 2
let freePlayCount = [0, 0]
let freePlay = false
let correctLetters = 0
let wordArray = []
let letterGuess = ''
let timeToSpin = false;
let timeToGuess = false;
let usedLettersArray = []
let timeToSolve = false;
let gamesPlayed = 0;
let timeForNewRound = true;
let newRoundClick = 0;

const wheelValues = [5000, 500, 900, 700, 300, 800, 550, 400, 500, 600, 350, 500, 900, 'BANKRUPT', 650, 'FREE PLAY', 700, 'LOSE A TURN', 800, 500, 450, 500, 300, 'BANKRUPT']


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
        word: 'CHILD PRODIGY',
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
let firstWordArray = []
let secondWordArray = []
let thirdWordArray = []
let fourthWordArray = []




// Innertext
spinValOutput.innerText = '--'
oneCashOutput.innerText = '$' + oneCash
twoCashOutput.innerText = '$' + twoCash



// Game functions 

// Change player turn
function changeTurn() {
    if (turn === 1) {
        turn = 2
        nextTurn = 1
    } else if (turn === 2) {
        turn = 1
        nextTurn = 2
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

// Free play text update
function freePlayTextUpdate(totalFreePlays) {
    if (turn === 1) {
        oneFreePlayOutput.innerText = `Free Plays: ${totalFreePlays}`
    } else if (turn === 2) {
        twoFreePlayOutput.innerText = `Free Plays: ${totalFreePlays}`
    }
}


// Add Free plays to player score
function addFreePlay(numOfFreePlays) {
    for (let i = 0; i < numPlayers; i++) {
        if (i + 1 === turn) {
            freePlayCount[i] = freePlayCount[i] + numOfFreePlays
            freePlayTextUpdate(freePlayCount[i])
            console.log(freePlayCount[i])
        }
    }
}



// Generate random value for spin
function randomSpinVal() {
    return Math.floor(Math.random() * wheelValues.length)
}

// Generate random value for puzzle
function randomPuzzleVal() {
    return Math.floor(Math.random() * 4)
}


// MESSAGE BOARD FUNCTIONS
// Game start
function gameStartMessage() {
    messageBoard.innerText = `Player 1, it's your turn! Go ahead and spin the Wheel of Fortune!`
}

// Message to project spin value and tell player to guess a letter
function spinValMessage(turn, value) {
    messageBoard.innerText = `Player ${turn}, guess a letter. You'll be awarded $${value} for each guessed letter found in the puzzle.`
}

// Message to project free play spin and tell player to guess a letter
function spinFreePlayMessage(turn, spinVal) {
    messageBoard.innerText = `Player ${turn}, guess a letter. You'll be awarded a Free Play for each instance of the letter found in the puzzle that you guess.`
}

// Hold Your Guess Message
function holdYourGuessMessage(turn) {
    messageBoard.innerText = `Whoa there Player ${turn}, hold your horses! Before you can guess another letter, you need to first spin the Wheel of Fortune!`
}

// Hold Your Spin message
function holdYourSpinMessage(turn) {
    messageBoard.innerText = `Whoa there Player ${turn}, hold your horses! Before you can spin the wheel again, you need to first guess a letter!`
}

// Hold your solve message - guess version
function holdSolveMustGuessMessage(turn) {
    messageBoard.innerText = `Not so fast Player ${turn}! You can only solve the puzzle after guessing a correct letter. Go ahead and guess a letter!`
}

// Hold your solve message - spin version
function holdSolveMustSpinMessage(turn) {
    messageBoard.innerText = `Not so fast Player ${turn}! You can only solve the puzzle after guessing a correct letter. First proceed with spinning the Wheel of Fortune!`
}


// Invalid guess message
function invalidGuessMessage(turn) {
    messageBoard.innerText = `Player ${turn}, your guess is invalid. Make sure that your guess is capitalized and only consists of one letter, and try again.`
}

function usedLetterMessage(turn, guess) {
    messageBoard.innerText = `Player ${turn}, ${guess} has already been guessed. Please guess a different letter.`
}

// Bankrupt message
function bankruptMessage(turn) {
    messageBoard.innerText = `Player ${turn}, you landed on Bankrupt - bummer! Your cash balance is reset to $0. Player ${nextTurn}, it's your turn to spin!`
}
// Bankrupt avoid message
function bankruptAvoidMessage(turn) {
    messageBoard.innerText = `Player ${turn}, you landed on Bankrupt but luckily you have a "Free play." Your cash balance is safe and you can take another spin!` 
}
// Lose a turn
function loseATurnMessage(turn) {
    messageBoard.innerText = `Player ${turn}, you lose a turn - bummer! Player ${nextTurn}, it's your turn to spin!`
}

// Avoid losing a turn
function loseATurnAvoidMessage(turn) {
    messageBoard.innerText = `Player ${turn}, you landed on "lose a turn" but you had a "Free play." Take another spin!`
}

// Successfully guessed letter(s) message:
function guessSuccessMessage(guess, numOfLetters) {
    if (numOfLetters === 1) {
        messageBoard.innerText = `Congratulations Player ${turn}, the puzzle contains ${numOfLetters} ${guess}! $${spinVal} has been added to your total cash and you get to spin again!` // need to update this so that it says the correct pluralization. also need to update for free play.
    } else {
        messageBoard.innerText = `Congratulations Player ${turn}, the puzzle contains ${numOfLetters} ${guess}'s! $${spinVal} has been added to your total cash and you get to spin again!` 
    }
}

function guessSuccessMessageFreePlay(guess, numOfLetters) {
    if (numOfLetters === 1) {
        messageBoard.innerText = `Congratulations Player ${turn}, the puzzle contains ${correctLetters} ${guess}! You have been awarded ${numOfLetters} ${spinVal} that can be used if you ever land on "Lose A Turn" or "Bankrupt!" Spin again, Player ${turn}!`
    } else {
        messageBoard.innerText = `Congratulations Player ${turn}, the puzzle contains ${correctLetters} ${guess}'s! You have been awarded ${numOfLetters} ${spinVal}'s that can be used if you ever land on "Lose A Turn" or "Bankrupt!" Spin again, Player ${turn}!`
    }
}

// Failure to guess a correct letter
function guessFailureMessage(turn, guess) {
    messageBoard.innerText = `Player ${turn}, unfortunately there are no ${guess}'s in the puzzle. Better luck next turn! Player ${nextTurn}, it's your turn to take a spin!`
}

// Correctly solved puzzle message
function correctPuzzleSolveMessage(turn) {
    messageBoard.innerText = `CONGRATULATIONS PLAYER ${turn}! You correctly solved the puzzle! You are the winner of this round! Click "Start New Game" to play again.`
}

// Incorrectly solved puzzle message
function wrongPuzzleSolveMessage(turn, guess) {
    messageBoard.innerText = `I'm sorrry player ${turn}, but "${guess}" is incorrect! Maybe you'll get it next turn! Player ${nextTurn}, your turn to spin the wheel.`
}


// Are you SURE you want to start a new game message
function confirmNewGameOrSpinMessage(turn) {
    messageBoard.innerText = `Are you sure you want to end this round and start a new one? If not, Player ${turn}, continue with your turn by spinning the wheel.`
}

function confirmNewGameOrGuessMessage(turn) {
    messageBoard.innerText = `Are you sure you want to end this round and start a new one? If not, Player ${turn}, continue with your turn by guessing a letter.`
}


// Bankrupt function
function bankruptFunction(turn) {
    switch (turn) {
        case 1:
            oneCash = 0
            oneCashOutput.innerText = '$' + oneCash
            break;
            case 2:
                twoCash = 0
                twoCashOutput.innerText = '$' + twoCash
                break;
            }
        }
        
        // function loseATurnFunction(turn) {
            //     switch (turn) {
                //         case 1: 
                //             if (oneFreePlay > 0) {
                    //                 loseATurnMessage(turn)
                    //                 oneFreePlay
                    //             }
                    //     }
                    
                    // }

function wheelSpinInterval() {
    interval = setInterval(wheelSpins, 5)
}
    
function wheelSpins() {
    wheelDegrees = wheelDegrees + 10
    wheelOfFortune.style.transform = 'rotate(' +  wheelDegrees + 'deg)'
}



function stopWheelSpin() {
    clearInterval(interval)
}

// setInterval(wheelSpins(),100)

// Spin Button Event listener
spinButt.addEventListener('click', function(e) {
    timeToSolve = false;
    if (timeToSpin === true) {
        let cashIndexNum = randomSpinVal()
        spinVal = wheelValues[cashIndexNum]
        
        if(Number.isFinite(spinVal)) {
            spinValOutput.innerText = `$${wheelValues[cashIndexNum]}`
        } else {
            spinValOutput.innerText = wheelValues[cashIndexNum]
        }
        spinAction(spinVal)
        wheelSpinInterval()
        setTimeout(stopWheelSpin, 1000)
    } else {
        holdYourSpinMessage(turn)
    }
})
                    
function spinAction(spinVal) {
    // console.log('turn: ', turn)
    for (let i = 0; i <= numPlayers; i++) {
        if (i + 1 === turn) {
            if (spinVal === 'LOSE A TURN') {
                if (freePlayCount[i] > 0) {
                    loseATurnAvoidMessage(turn)
                    freePlayCount[i] = freePlayCount[i] - 1
                    freePlayTextUpdate(freePlayCount[i])
                    console.log(freePlayCount[i])
                    return
                } else {
                    loseATurnMessage(turn)
                    changeTurn()
                    return
                }
            } else if (spinVal === 'BANKRUPT') {
                if (freePlayCount[i] > 0) {
                    bankruptAvoidMessage(turn)
                    freePlayCount[i] = freePlayCount[i] - 1
                    freePlayTextUpdate(freePlayCount[i])
                    console.log(freePlayCount[i])
                    return
                } else {
                    bankruptMessage(turn)
                    bankruptFunction(turn)
                    changeTurn()
                    return
                }
            } else if(spinVal === 'FREE PLAY') {
                spinFreePlayMessage(turn, spinVal)
                freePlay = true
                timeToSpin = false;
                timeToGuess = true;
                guessInput.focus()
                // freePlayCount[i] = freePlayCount[i] + 1
                return
            } else {
                spinValMessage(turn, spinVal)
                timeToSpin = false;
                timeToGuess = true;
                guessInput.focus()
                return spinVal
            }
        }
    }
    console.log('turn: ', turn)
}


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
    // console.log(currentPuzzleCategory)
    // console.log(currentPuzzle)

   
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
    console.log(firstWord, secondWord, thirdWord, fourthWord)
}

// function to create puzzle divs
function generatePuzzleLetters(first, second, third, fourth) {
    for (let i = 0; i < first.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        firstWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.setAttribute('id',`first-${i}`)
        newTileContainer.innerText = first.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    for (let i = 0; i < second.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        secondWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newSquareContainer.setAttribute('id',`second-${i}`)
        newTileContainer.innerText = second.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    for (let i = 0; i < third.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        thirdWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.setAttribute('id',`third-${i}`)
        newTileContainer.innerText = third.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    for (let i = 0; i < fourth.length; i++) {
        // Create Letter Div
        const newSquareContainer = document.createElement('div')
        newSquareContainer.classList.add('square')
        fourthWordOutput.append(newSquareContainer)
        // Create text div
        const newTileContainer = document.createElement('div')
        newTileContainer.classList.add('tile')
        newTileContainer.classList.add('disable-select')
        newTileContainer.setAttribute('id',`fourth-${i}`)
        newTileContainer.innerText = fourth.charAt(i)
        newSquareContainer.append(newTileContainer)
    }
    allTiles = document.querySelectorAll('.disable-select')
    allSquares = document.querySelectorAll('.square')
    categoryOutput.innerText = `Category: ${currentPuzzleCategory}`
    convertToArray(currentPuzzleArray)
    gameStartMessage()
    console.log('turn:', turn)
    console.dir(puzzleBoard.children[0].children[0].children[0])
    console.dir(puzzleBoard.children[0].children[0])
    

}


function newRound() {
    allTiles.forEach(tile => {
        tile.remove()
    })
    allSquares.forEach(square => {
        square.remove()
    })
}

// New game button event listener
newRoundButt.addEventListener('click', (e) => {
    if (timeForNewRound === true) {
        if (allTiles != undefined) {
            newRound()
        }
        newRoundButt.innerText = "Start New Round"
        generateNewPuzzle(puzzleOps);
        generatePuzzleLetters(firstWord, secondWord, thirdWord, fourthWord)
        timeToSpin = true;
        timeForNewRound = false;
        
    } else if (timeToSpin === true) {
        confirmNewGameOrSpinMessage(turn)
        newRoundButt.innerText = "Yes, Start New Round Please!"
        timeForNewRound = true;
    } else if (timeToGuess === true) {
        confirmNewGameOrGuessMessage(turn)
        newRoundButt.innerText = "Yes, Start New Round Please!"
        timeForNewRound = true;
    }

})

//PROBABLY WONT NEED THIS ANYMORE
// function to convert individual word characters to their own array
function convertToArray(currentPuzzleArray) {
        firstWordArray = Array.from(currentPuzzleArray[0])
        if (currentPuzzleArray.length >= 2) {
            secondWordArray = Array.from(currentPuzzleArray[1])
            if (currentPuzzleArray.length >= 3) {
                thirdWordArray = currentPuzzleArray[2]
        if (currentPuzzleArray.length >= 4) {
            fourthWordArray = currentPuzzleArray[3]
        }}}
}





// Guess function
function guessFunction(letterGuess) {
     
    for (let i = 0; i <= numPlayers; i++) {
        console.log (i + 1)
        if (i + 1 === turn) {
            console.log('this should only run once')
            for (let j = 0; j < currentPuzzleArray.length; j++) {
                currentPuzzleArray[j]
                wordArray = Array.from(currentPuzzleArray[j])
                console.log(wordArray)
                for (let k = 0; k < puzzleBoard.children[j].children.length; k++) {
                    console.log(puzzleBoard.children[j].children.length)
                    if (wordArray[k] === letterGuess) {
                        correctLetters = correctLetters + 1
                        console.log(correctLetters)
                        for (let l = 0; l < puzzleBoard.children[j].children[k].children.length; l++) {
                            // for (m = 0; m < wordArray.length; m++) {
                            //     console.log(wordArray[m])
                            //     // console.log(puzzleBoard.children[j].children[k].children[l].classList)
                            // }
                            puzzleBoard.children[j].children[k].children[l].classList.remove('disable-select')
                            console.dir(puzzleBoard.children[j].children[k].children[l])
                    
                        }
                    }
                } 
            }
            // console.log(correctLetters)
            if (correctLetters > 0) {
                if (freePlay === false) {
                    spinVal = spinVal * correctLetters
                    addCash(spinVal) 
                    guessSuccessMessage(letterGuess, correctLetters)
                    input.value = ''
                    correctLetters = 0
                    timeToGuess = false;
                    timeToSpin = true;
                    timeToSolve = true;
                } else {
                    addFreePlay(correctLetters)
                    guessSuccessMessageFreePlay(letterGuess, correctLetters)
                    input.value = ''
                    correctLetters = 0
                    timeToGuess = false;
                    timeToSpin = true;
                    timeToSolve = true;
                    freePlay = false;
                }
            } else {
                console.log('turn before message:', turn)
                guessFailureMessage(turn, letterGuess)
                input.value = ''
                changeTurn()
                timeToSpin = true;
                timeToGuess = false;
                console.log('turn after message and function:', turn)
                return
            }
        } 

    }
    // const wordOneLetterOne = document.querySelector('#first-0')
    // console.log(wordOneLetterOne)
    // for (i = 0; i <= numPlayers; i++) {
    //     if (i + 1 === turn) {
    //         let letterGuess = input.value
    //         console.log(input.value)
    //         let correctLetters = 0
    //         for (i = 0; i < firstWordArray.length; i++) {
    //             if (firstWordArray[i] === letterGuess) {
    //                 correctLetters =+ 1
    //                 wordOneLetterOne.classList.remove('disable-select')
    //                 console.log('YESSS')
    //                 console.log(wordOneLetterOne.className)
    //             }
    //         }
    //     }
    // }
    
    console.log('turn: ', turn)
}


// guessButt.addEventListener('mousedown', e => {
//     guessFunction()
// })

function usedLetterFunction(letter) {
    usedLettersArray.push(letter)
}

function hasLetterBeenUsed(letter) {
    if (usedLettersArray.includes(letter)) {
        return true
    }
}


guessForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let letterGuess = input.value.toUpperCase()
    console.log(letterGuess)
    
    if (timeToGuess === true) {
        console.log(letterGuess === '')
        console.log(letterGuess.toLowerCase() === letterGuess) 
        console.log(letterGuess.length > 1)
        console.log(usedLettersArray)
        if (letterGuess === '' || letterGuess.length > 1) {
            invalidGuessMessage(turn)
        } else if (hasLetterBeenUsed(letterGuess) === true) {
            usedLetterMessage(turn, letterGuess)
        } else {
            usedLetterFunction(letterGuess)
            guessFunction(letterGuess)
        } 
        
    } else {
        holdYourGuessMessage(turn)
    }
     
},)

console.log('turn: ', turn)
// changeTurn()
// console.log('turn: ', turn)


function puzzleSolveSetup() {
    solveButt.classList.add('hidden')
    solveInput.classList.remove('hidden')
    submitButt.classList.remove('hidden')
    solveInput.focus()
}


solveButt.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Solve:', timeToSolve)
    console.log('Guess:', timeToGuess)
    console.log('Spin:', timeToSpin)
    if (timeToSolve === true) {
        puzzleSolveSetup()         
    } else if (timeToGuess === true) {
        holdSolveMustGuessMessage(turn)
    } else if (timeToSpin === true) {
        holdSolveMustSpinMessage(turn)
    }
})

function resetSolveButton() {
    solveInput.value = ''
    solveButt.classList.remove('hidden')
    solveInput.classList.add('hidden')
    submitButt.classList.add('hidden')
}

function puzzleIsSolved() {
    console.dir(puzzleBoard.children[0].children[1])
    allTiles.forEach(tile => {
        tile.classList.add('colored-tile')
        console.dir(puzzleBoard.children[0].children[1])
    })
    console.dir(puzzleBoard.children[0].children[1])
}

// function winnerScoreIncreased() {
//     if (turn === 1)

// }

solveForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(currentPuzzle)
    let puzzleGuess = solveInput.value.toUpperCase();
    console.log(puzzleGuess)
    console.log()
    if (puzzleGuess === currentPuzzle) {
        puzzleIsSolved()
        correctPuzzleSolveMessage(turn);
        winnerScoreIncreased()
        timeForNewRound = true;
    } else {
        wrongPuzzleSolveMessage(turn, puzzleGuess)
        changeTurn()
    }
    resetSolveButton();
    timeToSolve = false;
})

// TO DO LIST?/////////

//format buttons
// write up insgructions!
// Move instructions to top!
// puzzle can only be played once and goes to used puzzle array
// add more words to word bank
//End of game scoring!
// Write up the README
// put comments into code explaining what I did
//buttons blink demonstrating what their next move should be
// highlight the player turn
// FORMATTING!
// add music!




