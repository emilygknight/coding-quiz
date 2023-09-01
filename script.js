/*
PSEUO-CODING
1. When you click the start button, the first 
question pops up and the timer begins
2. You click next it takes you to the next questionk
3. When you are done answering all three questions, it will tell you your score 
and keep track of the scores
*/
var questionElement = document.querySelector("#question");
var responseElement = document.querySelector("#responses");
var startButton = document.getElementById("start");
var next = document.querySelector(".next");
var startScreen = document.getElementById("intro");
var questionScreen = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
// Generate your data/carousel
var currentQuestionIndex = 0;
var index = 0;
var timer = 60;
var questions = [
    { question: "What is a function", responses: [ "Resuable code", "Primitive value", "None of the above" ], answer: 0 },
    { question: "What is an array", responses: [ "List of values", "Key value pairs", "None of the above" ], answer: 2 },
    { question: "What is a primitive value ", responses: [ "123", "1234", "None of the above" ], answer: 2 },
    { question: "What is the abbreviation JSON", responses: [ "JASON", "Javascript notation object", "None of the above" ], answer: 1 },
  ];
  
function startTimer() {
    setInterval(function () {
        timer--;
    }, 1000);
}

function starQuiz() {
    currentQuestionIndex = 0;
renderQuestion();
}
  
  // Navigate through list of questions
  function nextQuestion() {
   index++;
    // Render the question
    renderQuestion();
    // render the anser
    renderAnswers();
  }
  
  // renders the question
  function renderQuestion() {
    // Update the html with the current question
    questionElement.textContent = questions[index].question;
  }
  
  function renderAnswers() {
    console.log("questions object",questions[index]);
    console.log("list of responses", questions[index].responses);
    // Clears the html by settting innerHTML to an empty string.
    questionResponseElement.innerHTML = "";
    for (var i = 0; i < questions[index].responses.length; i++ ) {
      console.log(questions[index].responses[i]);
      var li = document.createElement("li");
      li.textContent = questions[index].responses[i];
      questionResponseElement.appendChild(li);
    }
  }

  startButton.addEventListener("click", function() {
  startScreen.style.display = "none";
  questionScreen.style.display = "block";
  });

  responseElement.addEventListener("click", function(event) {
    console.log("clickng on UL", event);
    var selectedIndex = event.target.getAttribute("data-index");

    if (selectedIndex === correctIndex) {
        console.log("selected correct answer");
    } else {
        console.log("selected wrong answer");
    }

  }
  );

//   next.addEventListener("click", function() {
//     for (var i = 0; i < questions[index]; i++ ) {
//         console.log(questions[index].responses[i]);
//         var li = document.createElement("li");
//         li.textContent = questions[index].responses[i];
//         questionResponseElement.appendChild(li);
//     }
//   }) ;

//   timerEl.textContent = timer;
starQuiz();