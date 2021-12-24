var timerEl = document.getElementById("timer");
var startButton = document.getElementById("begin");
var statusText = document.getElementById("status");
var question = document.getElementById("question");
var option1 = document.getElementById("b1");
var option2 = document.getElementById("b2");
var option3 = document.getElementById("b3");
var option4 = document.getElementById("b4");
var container = document.getElementById("buttonContainer");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");

var correctAnswer = "0";
var score = 0;
var timeLeft = 30;
var currentQuestion = -1;

var loadedHighScore = localStorage.getItem("highScore");
var loadedHighIni = localStorage.getItem("highIni");
statusText.textContent = ("Last Score: " + loadedHighScore + " by " + loadedHighIni);

function countdown() {

    //Counts down at one second per second
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft.toString();
        if (timeLeft > 0) {
            timeLeft--;
            
        }
        if (timeLeft == 0) {
            timerEl.textContent = timeLeft.toString();
            endGame();
            clearInterval(timeInterval);
        }
    }, 1000);

}

//Begins the quiz when the start button is clicked
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    startButton.remove();
    countdown();
    newQuestion();
    option1.removeAttribute("hidden");
    option2.removeAttribute("hidden");
    option3.removeAttribute("hidden");
    option4.removeAttribute("hidden");
})

container.addEventListener("click", function (event) {
    event.preventDefault();
    var n = event.target.getAttribute("data-number");
    checkAnswer(n);
})

//TODO: Generates a new question from data
function newQuestion() {

//First, select a question at random
var n = 0
n = Math.floor(Math.random() * Q.length);

//Ensure we do not repeat the current question
if(n == currentQuestion && !(n == 0)){
    console.log("repeat avoided--");
    n--;
} else if(n == currentQuestion){
    console.log("repeat avoided++");
    n++;
}
currentQuestion = n;

//Load question data into page
question.textContent = Q[n].question;
option1.textContent = Q[n].choice1;
option2.textContent = Q[n].choice2;
option3.textContent = Q[n].choice3;
option4.textContent = Q[n].choice4;
correctAnswer = Q[n].correct;
}

//Takes the user's input and checks if it is correct
function checkAnswer(i) {
    if (i == correctAnswer) {
        statusText.textContent = "Correct";
        statusText.style.color = "#00FF00";
        score++;
    } else {
        statusText.textContent = "Incorrect";
        statusText.style.color = "#FF0000";
        timeLeft = Math.max((timeLeft - 5), 0);
        timerEl.textContent = timeLeft.toString();
    }
    newQuestion(Q1);
}

//TODO: Ends the game when time is up
function endGame() {
    option1.setAttribute("hidden", "true");
    option2.setAttribute("hidden", "true");
    option3.setAttribute("hidden", "true");
    option4.setAttribute("hidden", "true");
    question.setAttribute("hidden", "true");
    timerEl.setAttribute("hidden", "true");
    statusText.style.color = "#FFFFFF";
    statusText.textContent = ("Your final score is " + score);
    initials.removeAttribute("hidden");
    submit.removeAttribute("hidden");
}

//Handles writing high score to local storage
submit.addEventListener("click", function(event){
    event.preventDefault();
    var ini = initials.value;

    localStorage.clear();

    localStorage.setItem("highScore", score);
    localStorage.setItem("highIni", ini);
    initials.setAttribute("hidden", "true");
    submit.setAttribute("hidden", "true");
})

//TODO: Question Data
let Q1 = {
    question: "In what year was javascript created?",
    choice1: "1812",
    choice2: "1995",
    choice3: "2021",
    choice4: "1999",
    correct: "2"
};


let Q2 = {
    question: "What tag would you use to insert a script into html?",
    choice1: "<javascript>",
    choice2: "<js>",
    choice3: "<script>",
    choice4: "<java>",
    correct: "3"
};

let Q3 = {
    question: "What characters are used to denote a single-line javascript comment?",
    choice1: "//",
    choice2: "#",
    choice3: "/*",
    choice4: "*/",
    correct: "1"
};

let Q4 = {
    question: "What characters are used to denote a multi-line javascript comment?",
    choice1: "#",
    choice2: "**",
    choice3: "?",
    choice4: "/*",
    correct: "4"
};

let Q5 = {
    question: "To generate a random value between 1 and 0, use this:",
    choice1: "rand()",
    choice2: "random()",
    choice3: "Math.rand()",
    choice4: "Math.random()",
    correct: "4"
};

let Q6 = {
    question: "Which of the following options should be used to prevent a variable from changing value?",
    choice1: "final",
    choice2: "immutable",
    choice3: "const",
    choice4: "invariable",
    correct: "3"
};

let Q = [Q1, Q2, Q3, Q4, Q5, Q6];