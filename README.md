# WHEEL OF FORTUNE!


## Game Description 

Wheel of fortune is a beloved global TV show and I've created a dynamic web version of the show! Two players can compete for by solving word/phrase puzzles with only a "category" as a hint. Players are presented with white squares, with the number of squares corresponding to the number of letters in the word puzzle. Each player will get to guess one letter at a time. If the letter is in the puzzle, then they can guess again. Each turn, a player spins the Wheel of Fortune, which has point values on a wheel. If they correctly guess a letter, they will receive whatever point value their spin lands on. If, on their turn, they want to solve the puzzle, they can press a button to type in the answer. 

## Link to Project
https://shazammon.github.io/p1-wheel-of-fortune/


## Tech Stack

- HTML5
- CSS
- JavaScript
- DOM manipulation


## Project Approach / Roadblocks / Takeaways

For this project, I first thought through the layout of the webpage and the cadence of gameplay. After structuring my thoughts,I set up an outline in HTML of what the webpage would look like, with all the relative div containers set up to enable Flexbox layouts. I then drew from my current knowledge bank of javascript funcionatliy and documented the types of variables and functions that would be required to facilitate game play. 
After documenting a preliminary HTML and JavaScript outline, I wrote up my HTML and began playing with the layout using the Flexbox model. I had to watch several tutorials on Udemy from Colt Steele's "The Web Developer Bootcamp 2022" class. After I felt confident in Flexbox mechanisms, I refined my div containers and set up the layout of the webpage. I added additional styling to give the page a simple, yet sleek design. 

After my webpage layout and design was in a good place, I set out to begin writing my javascript. I defined all DOM objects to link to HTML elements. I relied on the Javascript outline I had previously written and started from the start of game, writing functions so that each portion of the game was written sequentially. I set up console.log's almost every other line of code to ensure that my code functioned properly as I went. Trial and error was the name of the game for me (pun intended)! I learned a great deal from this process in terms of what coding syntax and functionality does and doesn't work. 

I ran into several challenges along the way. The first was to call back DOM objects created. I worked with my instructors to develop a way to identify DOM objects created through DOM manipulation, but referencing the parent object and using nested for loops to drill down to their underlying children, and then manipulating their classes and styles accordingly (this was in relation to revealing the letters on the newly created tiles.)

There were many elements of the game that I did not anticipate in my initial planning that proved to require great effort to successfully code into the game. For example, having a "Free Play" option on the wheel (which, if a player is awarded a "Free Play", they can use to counteract landing on "Bankrupt" or "Lose a Turn." I created an Array to store how many free plays a player has and drew upon that array to check if a player had a free play to use before "Bankrupt" or "Lose a Turn" was ever used.)

I was proud that I wrote the code so that it could dynamically adapt to more than 2 players. For this I relied on For loops that only ran code if the "Turn" variable matched the whichever player's turn it currently was.  

I learned the power of using "console.logs" to prevent, identify, and address bugs in my code. The more frequently that I pre-emptively deployed console.log's to validate what I was coding, the less frequently bugs popped up. When bugs did happen, I was able to get more comfortable placing console.logs in strategic places to identify bugs and I became more efficient, identifying the bugs sooner!

I also learned how important it is to master a concept before I try to jump employing it in my code. There are default properties and certain behaviors that each variable, object, element, function, and syntax has that if you master it, you can prevent bugs and write code in a more efficient way. 

I also learned the importance of planning. There were many contingencies in my game that I did not account for during my planning phase that caused roadblocks down the road. Had I truly mentally thought through a full game, every type of action and result of those actions, and then made a preliminary plan as to how I would write code to employ tose actions/results, I could have written more effiient code and prevented roadblocks. 






## Wireframe
<!-- link to image -->
![Wheel of Fortune layout](./wheelOfFortuneWireFrame.jpeg)



## MVP
- Render a start screen with game play instructions

- Render a game screen with wheel, puzzle, letter tiles, message board, buttons, input boxes, and cash balances

- Randomly generate puzzle and puzzle can only be played once

- Randomly generate a value after spin

- Render messages guiding players through gameplay

- Create logic to check if a letter is in the given word/phrase, appropriate points added to to respective player if letter is in word

- Create logic to continue with same player if correct letter is guessed, and switch to next player if letter is not in word

- When player selects "Solve the Puzzle" button, checks if phrase is correct and if yes, projects the winning message

- The "start new game" button resets the game and randomly generates a new word puzzle




## Stretch Goals
Render the wheel so that wheel actually spins and lands on the correct point value when the "SPIN" button is pressed

Running total of players' points and # of wins for continual game play

Highlight or somehow emphasize players score when it's their turn.

"Lose a turn" tile on wheel of fortune and logic to skip player's turn

Create "Toss up" part of game where white tiles representing a word/phrase are shown and letters slowly are revealed. A player can hit their key to try to solve the puzzle. This determines who goes first. 

Allow up to 4 players and at the start of the game, ask how many players will be playing 
Add sound and a sound on/off button

Unlimited number of words and phrases pulled in somehow


## Potential Roadblocks
Successfully creating layout of screen in a way that looks nice and is functional

Auto-creating objects representing each letter tile and then auto-spacing out the letter tiles of the word puzzle - do I use flexbox for this?

## Sources
Instructions modal: https://www.w3schools.com/howto/howto_css_modals.asp
Rainbow background: https://stackoverflow.com/questions/64859808/how-to-create-a-full-rainbow-background
Wheel of Fortune Logo image: https://www.valottery.com/wheeloffortune
Wheel of Fortune wheel image: https://i.ebayimg.com/images/g/t-cAAOSw-yNfwtrQ/s-l500.jpg




