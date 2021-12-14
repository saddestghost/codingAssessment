// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){}

function showResults(){}

buildQuiz();




function startTimer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('startTimer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);


window.onload = function startTimer() {
    function startTimer(){
        var sec = 60;
        var timer = setInterval(function(){
            document.getElementById('startTimer').innerHTML='00:'+sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
}


submitButton.addEventListener('click', showResults);
