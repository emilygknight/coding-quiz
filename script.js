/*
PSEUO-CODING
1. When you click the start button, the first 
question pops up and the timer begins
2. You click next it takes you to the next questionk
3. When you are done answering all three questions, it will tell you your score 
and keep track of the scores
*/
var startButton = document.querySelector("quiz-intro");
var questionEl = document.querySelector("questions");
var answerButtons = document.querySelector("buttons");
var nextButton = document.querySelector("next-btn");
var timerEl = document.querySelector(".timer-count");
var timer;
var timerCount;
var questions = [
    {
        question: "What is one of JavaScripts data type?",
        answers: [
        { text: "Boolean", correct: true},
        { text: "Underline", correct: false},
        { text: "Capital", correct: false},
        { text: "Pierce", correct: false},
        ]
    },
    {
        question: "What is one of JavaScripts data type?",
        answers: [
        { text: "Boolean", correct: true},
        { text: "Underline", correct: false},
        { text: "Capital", correct: false},
        { text: "Pierce", correct: false},
        ]
    },
    {
        question: "What is one of JavaScripts data type?",
        answers: [
        { text: "Boolean", correct: true},
        { text: "Underline", correct: false},
        { text: "Capital", correct: false},
        { text: "Pierce", correct: false},
        ]
    },
    {
        question: "What is one of JavaScripts data type",
        answers: [
        { text: "Boolean", correct: true},
        { text: "Underline", correct: false},
        { text: "Capital", correct: false},
        { text: "Pierce", correct: false},
        ]
    }
]

function startQuiz() {
    score = 0;
    nextButton.innerHTML = "Next";
    timerCount = 60;
    showQuestion();
}

function showQuestion(){
    resetState();
    var currentQuestion = questions[i];
    var questionNo = currentQuestion + 1;
    questionEl.innerHTML - questionNo + ". " + currentQuestion.answers;
    questions;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startButton.addEventListener("click", startQuiz);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) {
            clearInterval(timer);
        }
    })
}