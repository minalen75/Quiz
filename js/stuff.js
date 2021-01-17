// Home Page 
// <div id="container">
// start button 
// add event listener on start 
// document.createElement('h1') = question1
// document.createElement('button1') = answer1
// document.createElement('button2') = answer2
// document.createElement('button3') = answer3
// document.createElement('button4') = answer4
// QUESTIONS AND ANSWERS CHANGE
// document.createElement('submit') = submit
// if answer === right then next question
// if answer === wrong then count - 5 seconds then next question
// if lastAnswer then allow saving of high score and initials
// SUBMIT NEVER CHANGES 
// timer
// count variable = 75sec
// if count === 0 stop timer(clearInterval()) 
// then allow them to save initials and score
// initials require input
// localstorage to save initials and score and display initials and score
// when initials and score are saved display initials and score
// button to jump to high scores from start page
let arrObj = JSON.parse(localStorage.getItem('highScore')) || [];
count = 75;
const timer = setInterval(function() {
    count--
}, 1000)
clearInterval(timer)
let playerScore = {
    initials: document.getElementById('initials').value,
    score: count
};
arrObj.push(playerScore)
