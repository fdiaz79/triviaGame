# triviaGame
The popular trivia Game.

The player must choose amongst 4 themes to play. Each theme has 10 questions, 4 possible answers and 30 seconds each to answer. After each selection the player does, the score will be updated and the corresponding message informing the player their score anda button to continue when the player is ready.

After the 10 questions the final score will be showed, and the option to restart the trivia game from the begining.

All the data base is stored in an object that contains 4 objects-one for each trivia theme. Each theme object is formed by 10 objects (each one a question) that contain a string with the text of the question, another string with a fun fact about the question, 4 arrays with the possible answers and an empty array that will save the answers once they have been shuffle to be presented to the player. Each array with the possible answers have two elements, the text of each answer and a boolean value, which is used later to indicate which on is the correct answer.

Once the player loads the index.html, a function initializeGame() will be called, this function is in charge of clearing the DOM, initialize the score variables and then present the 4 different themes. The player will select a them and this will trigger a loop to save the name of each questionObject into an array, this will allow to move thru the themObject question by question. The game will show the instructions to the player and after the player clicks on the start button, the function loadQuestions() will be called.

loadQuestions will choose one QuestionObject from the themeObject by using a index k and will proceed to shuffle the answers and then load the question with its shuffled answers into the DOM. A Function with a timer of 30 seconds will start. After the 30 seconds the wrongAns() function will be called or if the player clicks on the wrong question this function will also be called. If the player clicks the correct answer, the function corrAns() will be called. These two functions do basically the same except incrementing the badAns or corrAns counters, depending on which function is called. The other actions of these functions are show the player if he is correct or not, show the score and a gif. Also a button to continue.

After the button to continue is clicked, the function contGame() will be called. This function basically checks the k index to see if it is bigger than the number of properties in the themeObject or not. If not, it will call loadQuestions() again. If it is bigger, it will call the function endGame, which gives the option to end the game or restart it . If the player restarts the game, the function initializeGame() will be called again, to set the game to its initial conditions.

Do you accept the challenge? https://fdiaz79.github.io/triviaGame/
