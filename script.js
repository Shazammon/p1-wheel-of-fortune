
// Define DOM button objects
const oneTotalCashOutput = document.querySelector('#player-one-cum-cash')
const twoTotalCashOutput = document.querySelector('#player-two-cum-cash')
const spinValOutput = document.querySelector('#spin-value')
const wheelOfFortune = document.querySelector('#wheel')
const spinButt = document.querySelector('#spin-button')
const puzzleBoard = document.querySelector('#puzzle-board')
const categoryOutput = document.querySelector('#category-output')
const oneRoundScore = document.querySelector('#player-one')
const twoRoundScore = document.querySelector('#player-two')
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
const instructionsButt = document.querySelector('#instructions-button')
const firstWordOutput = document.getElementById('word-container-one')
const secondWordOutput = document.getElementById('word-container-two')
const thirdWordOutput = document.getElementById('word-container-three')
const fourthWordOutput = document.getElementById('word-container-four')
let modalInstructions = document.getElementById('myModal')
let span = document.getElementsByClassName("close")[0];

// Define placeholder variables


//Define global variables 
let turn = 1
let nextTurn = 2
let spinVal = 0
// need to update this with Arrays!! it will be so much better
let oneCash = 0
let oneTotalCash = 0
let twoTotalCash = 0
let twoCash = 0
let oneFreePlay = 0
let twoFreePlay = 0
let numPlayers = 2
let freePlayCount = [0, 0]
let freePlay = false
let correctLetters = 0

let wheelDegrees = 0
let timeToSpin = false; // boolean to track whether it's time for player to spin
let timeToGuess = false; // boolean to track whether it's time for player to guess
let timeToSolve = false; // boolean to track whether it's time for player to solve the puzzle
let timeForNewRound = true; // boolean to track whether it's time for a new round
let usedLettersArray = [] // Array to keep track of guessed letters during a round
let gamesPlayed = 0; // tracker for number of games played
let newRoundClick = 0;

//placeholder variables
let wordArray = []
let letterGuess = ''
let allTiles ;
let allSquares ;
let interval ;
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

// Array of all possible wheel options
const wheelValues = [5000, 500, 900, 700, 300, 800, 550, 400, 500, 600, 350, 500, 900, 'BANKRUPT', 650, 'FREE PLAY', 700, 'LOSE A TURN', 800, 500, 450, 500, 300, 'BANKRUPT']


// List of puzzle options in an object
let puzzleOps = {
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
    word10: {
        category: 'Slang',
        word: 'CHILL OUT',
    },
    word11: {
        category: 'Phrase',
        word: 'BRAINS AND BRAWN',
    },
    word12: {
        category: 'Person',
        word: 'VINCENT VAN GOGH',
    },
    word13: {
        category: 'Foreign Phrase',
        word: 'MAZEL TOV',
    },
    word14: {
        category: 'Thing',
        word: 'UNDERWATER PHOTOGRAPHY',
    },
    word1: {
        category: 'Thing',
        word: 'CHOCOLATE DIPPED STRAWBERRY',
    },
    word15: {
        category: 'Place',
        word: 'FACTORY',
    },
    word16: {
        category: 'Place',
        word: 'NEIGHBORHOOD',
    },
    word17: {
        category: 'Phrase',
        word: 'UNDERSTANDING THE BIG PICTURE',
    },
    word18: {
        category: 'Person',
        word: 'MARILYN MONROE',
    },
    word19: {
        category: 'Occupation',
        word: 'POLITICIAN',
    },
    word20: {
        category: 'Phrase',
        word: 'LET ME GUESS',
    },
    word21: {
        category: 'Phrase',
        word: 'ON CLOUD NINE',
    },
    word22: {
        category: 'Thing',
        word: 'BABY POWDER',
    },
    word23: {
        category: 'Book',
        word: 'GREEN EGGS AND HAM',
    },
    word24: {
        category: 'Event',
        word: 'SUMMER BREAK',
    },
    word25: {
        category: 'Activity',
        word: 'SYNCHRONIZED SWIMMING',
    },
    word26: {
        category: 'Thing',
        word: 'MARINE BIOLOGY',
    },
    word27: {
        category: 'Occupation',
        word: 'ATHLETIC DIRECTOR',
    },
    word28: {
        category: 'Phrase',
        word: 'BELIEVE IN YOURSELF',
    },
    word29: {
        category: 'Title',
        word: 'A WRINKLE IN TIME',
    }
    
}


// Innertext
spinValOutput.innerText = '--'
oneCashOutput.innerText = '$' + oneCash
twoCashOutput.innerText = '$' + twoCash


// functions to generate the instructions modal 
instructionsButt.onclick = function() {
    modalInstructions.style.display = "block";
}

span.onclick = function() {
    modalInstructions.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalInstructions) {
        modalInstructions.style.display = "none";
    }
}

// GAME FUNCTIONS

// Function to change player turn
function changeTurn() {
    // Change turn variable
    if (turn === 1) {
        oneRoundScore.style.backgroundColor = 'white'
        twoRoundScore.style.backgroundColor = 'rgb(74 240 73)'
        turn = 2
        nextTurn = 1
    } else if (turn === 2) {
        oneRoundScore.style.backgroundColor = 'rgb(74 240 73)'
        twoRoundScore.style.backgroundColor = 'white'
        turn = 1
        nextTurn = 2
    }
}

// Function: Add cash to player's current balance
function addCash(cash) {
    if (turn === 1) {
        oneCash += cash // Update cash variable for player 1
        oneCashOutput.innerText = '$' + oneCash // Update display for player 1
    } else if (turn === 2) {
        twoCash += cash // Update cash variable for player 2
        twoCashOutput.innerText = '$' + twoCash // Update display for player 2
        
    }
}

// Function: Free play text update
function freePlayTextUpdate(totalFreePlays) {
    if (turn === 1) {
        oneFreePlayOutput.innerText = `Free Plays: ${totalFreePlays}` // update player 1 display
    } else if (turn === 2) {
        twoFreePlayOutput.innerText = `Free Plays: ${totalFreePlays}` // Update player 2 display
    }
}


// Function: Add Free plays to player score
function addFreePlay(numOfFreePlays) {
    for (let i = 0; i < numPlayers; i++) {
        if (i + 1 === turn) {
            freePlayCount[i] = freePlayCount[i] + numOfFreePlays
            freePlayTextUpdate(freePlayCount[i])
            console.log(freePlayCount[i])
        }
    }
}

// Function: Generate random value for spin
function randomSpinVal() {
    return Math.floor(Math.random() * wheelValues.length)
}

// Function: Generate random value for puzzle
function randomPuzzleVal() {
    return Math.floor(Math.random() * 4)
}


// MESSAGE BOARD FUNCTIONS
// Game start message
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

function holdSpinNewGuessMessage() {
    messageBoard.innerText = `Before you can guess a letter, you need to first start a new round!`
}

// Hold Your Spin messages
// Spin first version
function holdYourSpinMessage(turn) {
    messageBoard.innerText = `Whoa there Player ${turn}, hold your horses! Before you can spin the wheel again, you need to first guess a letter!`
}
// New round first on spin version
function holdSpinNewRoundMessage() {
    messageBoard.innerText = `Before you can spin the wheel, you need to first start a new round!`
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
    messageBoard.innerText = `Player ${turn}, your guess is invalid. Make sure that your guess only consists of one letter, and try again.`
}

// Already used a letter invalid message
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
// Lose a turn message
function loseATurnMessage(turn) {
    messageBoard.innerText = `Player ${turn}, you lose a turn - bummer! Player ${nextTurn}, it's your turn to spin!`
}

// Avoid losing a turn message
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

// Successfully guessed letter(s) on a free play spin message
function guessSuccessMessageFreePlay(guess, numOfLetters) {
    if (numOfLetters === 1) {
        messageBoard.innerText = `Congratulations Player ${turn}, the puzzle contains ${correctLetters} ${guess}! You have been awarded ${numOfLetters} ${spinVal} that can be used if you ever land on "Lose A Turn" or "Bankrupt!" Spin again, Player ${turn}!`
    } else {
        messageBoard.innerText = `Congratulations Player ${turn}, the puzzle contains ${correctLetters} ${guess}'s! You have been awarded ${numOfLetters} ${spinVal}'s that can be used if you ever land on "Lose A Turn" or "Bankrupt!" Spin again, Player ${turn}!`
    }
}

// Failure to guess a correct letter message
function guessFailureMessage(turn, guess) {
    messageBoard.innerText = `Player ${turn}, unfortunately there are no ${guess}'s in the puzzle. Better luck next turn! Player ${nextTurn}, it's your turn to take a spin!`
}

// Correctly solved puzzle message
function correctPuzzleSolveMessage(turn) {
    messageBoard.innerText = `CONGRATULATIONS PLAYER ${turn}! You correctly solved the puzzle! You are the winner of this round! Click "Start New Round" to play again.`
}

// Incorrectly solved puzzle message
function wrongPuzzleSolveMessage(turn, guess) {
    messageBoard.innerText = `I'm sorrry player ${turn}, but "${guess}" is incorrect! Maybe you'll get it next turn! Player ${nextTurn}, your turn to spin the wheel.`
}

// Are you SURE you want to start a new game message
// spin version
function confirmNewGameOrSpinMessage(turn) {
    messageBoard.innerText = `Are you sure you want to end this round and start a new one? If not, Player ${turn}, continue with your turn by spinning the wheel.`
}

// guess version
function confirmNewGameOrGuessMessage(turn) {
    messageBoard.innerText = `Are you sure you want to end this round and start a new one? If not, Player ${turn}, continue with your turn by guessing a letter.`
}

// New game message
function newGameMessage() {
    messageBoard.innerText = `The game has been reset. Press "Start New Round" to start a new game.`
}


// Function: landed on BANKRUPT
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
        
//FUNCTIONS TO SPIN WHEEL
// Function: set interval
function wheelSpinInterval() {
    interval = setInterval(wheelSpins, 5)
}
// Function: degrees to spin
function wheelSpins() {
    wheelDegrees = wheelDegrees + 10
    wheelOfFortune.style.transform = 'rotate(' +  wheelDegrees + 'deg)'
}
//Function: clear interval
function stopWheelSpin() {
    clearInterval(interval)
}

// Event Listener Function: Spin Button 
spinButt.addEventListener('click', function(e) {
    timeToSolve = false;
    newRoundButt.innerText = "Start New Round"
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
        setTimeout(stopWheelSpin, 800)
    } else {
        if (timeForNewRound === true) {
            holdSpinNewRoundMessage()
        } else {
            holdYourSpinMessage(turn)
        }
    }
})

// Function: what to do with various spin results
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
}

// Function: Select random puzzle
function getRandomPuzzle(puzzleOps) {
    let puzzleTest = Object.keys(puzzleOps);
    currentPuzzleObject = puzzleTest[Math.floor(Math.random() * puzzleTest.length)]
    currentPuzzle = puzzleOps[currentPuzzleObject].word
    currentPuzzleCategory = puzzleOps[currentPuzzleObject].category
    delete puzzleOps[currentPuzzleObject]
}

// Function: Select a new Puzzle
function generateNewPuzzle(puzzleOps) {
    getRandomPuzzle(puzzleOps)
    currentPuzzleArray = currentPuzzle.split(" ")
    console.log(currentPuzzleArray.length)
    firstWord = currentPuzzleArray[0]
    if (currentPuzzleArray.length >= 2) {
        secondWord = currentPuzzleArray[1]
        if (currentPuzzleArray.length >= 3) {
            thirdWord = currentPuzzleArray[2]
    if (currentPuzzleArray.length >= 4) {
        fourthWord = currentPuzzleArray[3]
    }}}
    console.log(firstWord, secondWord, thirdWord, fourthWord)
}

// Function: Create letter tiles and divs to hold the tiles
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
    allTiles = document.querySelectorAll('.tile')
    allSquares = document.querySelectorAll('.square')
    categoryOutput.innerText = `Category: ${currentPuzzleCategory}`
    convertToArray(currentPuzzleArray)
    gameStartMessage()
    console.log('turn:', turn)
    console.dir(puzzleBoard.children[0].children[0].children[0])
    console.dir(puzzleBoard.children[0].children[0])
    

}

// Function: start a new round
function newRound() {
    allTiles.forEach(tile => {
        tile.remove()
    })
    allSquares.forEach(square => {
        square.remove()
    })

    
    for (let i = 0; i < usedLettersArray.length; i++) {
        usedLettersArray.splice(i)
    }
    categoryOutput.innerText = ''

}

//Function: reset word variables and puzzle array
function resetWordsAndArray() {
    currentPuzzleArray.splice(0, currentPuzzleArray.length)
    firstWord = ''
    secondWord = ''
    thirdWord = ''
    fourthWord = ''
}

// Event Listener: New game button event listener
newRoundButt.addEventListener('click', (e) => {
    if (timeForNewRound === true) {
        if (allTiles != undefined) {
            newRound()
        }
        resetWordsAndArray()
        console.log(currentPuzzleArray)
        currentCashReset()
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


// Function: Convert individual word characters to their own array
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

// Function: Logic for guessing a letter in the puzzle
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
                            puzzleBoard.children[j].children[k].children[l].classList.remove('disable-select')
                            console.dir(puzzleBoard.children[j].children[k].children[l])
                    
                        }
                    }
                } 
            }
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
}


// Function: check if letter has been used and to add guessed letter to usedLettersArray
// Add to array
function usedLetterFunction(letter) {
    usedLettersArray.push(letter)
}
// Check if its been used
function hasLetterBeenUsed(letter) {
    if (usedLettersArray.includes(letter)) {
        return true
    }
}

// Event listener: on submit form to guess a letter (Guess Button)
guessForm.addEventListener('submit', function(e) {
    e.preventDefault()
    timeToSolve = false
    newRoundButt.innerText = "Start New Round"
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
        if (timeForNewRound === true) {
            holdSpinNewGuessMessage()
        } else {
            holdYourGuessMessage(turn)
        }
    } 
},)

// Function: set up solve the puzzle form - button + input
function puzzleSolveSetup() {
    solveButt.classList.add('hidden')
    solveInput.classList.remove('hidden')
    submitButt.classList.remove('hidden')
    solveInput.focus()
}

// Event Listener: solve button event listener
solveButt.addEventListener('click', function(e) {
    e.preventDefault()
    if (timeToSolve === true) {
        puzzleSolveSetup()         
    } else if (timeToGuess === true) {
        holdSolveMustGuessMessage(turn)
    } else if (timeToSpin === true) {
        holdSolveMustSpinMessage(turn)
    }
})

// Function: bring back the "I'd like to solve the puzzle button"
function resetSolveButton() {
    solveInput.value = ''
    solveButt.classList.remove('hidden')
    solveInput.classList.add('hidden')
    submitButt.classList.add('hidden')
}

// Function: reveal all tiles on a correct puzzle solve
function puzzleIsSolved() {
    allTiles.forEach(tile => {
        tile.classList.add('colored-tile')
    })
}

// Function: increase winner's cumulative balance after correct puzzle solve
function winnerScoreIncreased() {
    if (turn === 1) {
        oneTotalCash = oneTotalCash + (oneCash * 2)
        oneTotalCashOutput.innerText = `$${oneTotalCash}`
    } else if (turn === 2) {
        twoTotalCash = twoTotalCash + (twoCash * 2)
        twoTotalCashOutput.innerText = `$${twoTotalCash}`
    }
}

// Function: reset players' current cash balances 
function currentCashReset() {
    oneCash = 0
    twoCash = 0
    oneCashOutput.innerText = `$${oneCash}`
    twoCashOutput.innerText = `$${twoCash}`
}

// Function: reset players' cumulative total cash balances
function totalCashReset() {
    oneTotalCash = 0
    twoTotalCash = 0
    oneTotalCashOutput.innerText = `$${oneCash}`
    twoTotalCashOutput.innerText = `$${twoCash}`
}

// Event Listner: on solve the puzzle form
solveForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(currentPuzzle)
    let puzzleGuess = solveInput.value.toUpperCase();
    console.log(puzzleGuess)
    console.log()
    if (puzzleGuess === currentPuzzle) {
        puzzleIsSolved()
        console.dir(allTiles)
        correctPuzzleSolveMessage(turn);
        winnerScoreIncreased()
        currentCashReset()
        timeForNewRound = true;
        timeToSpin = false;
        console.log(timeToGuess, timeToSpin)
    } else {
        wrongPuzzleSolveMessage(turn, puzzleGuess)
        changeTurn()
    }
    resetSolveButton();
    timeToSolve = false;
})


// Function: Reset enter game function
function resetScores() {
    currentCashReset();
    totalCashReset();
    newRound();
    newGameMessage();
    turn = 1;
    timeForNewRound = true;
}

// Event Listener: on "Reset Scores" button to start entire new game
resetButt.addEventListener('click', function(e) {
    resetScores();   
})


// TO DO LIST?/////////
// add more words to word bank
//continue formatting buttons
// Write up the README
// put comments into code explaining what I did
//buttons blink demonstrating what their next move should be
// FORMATTING!
// add music!




