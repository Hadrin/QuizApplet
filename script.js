var timerEl = document.getElementById("timer");
var startButton = document.getElementById("begin");
var option1 = document.getElementById("b1");
var option2 = document.getElementById("b2");
var option3 = document.getElementById("b3");
var option4 = document.getElementById("b4");

function countdown() {
    var timeLeft = 60;
    timerEl.textContent = timeLeft.toString();
  
    //Counts down at one second per second
    var timeInterval = setInterval(function () {
      if(timeLeft > 0){
        timeLeft--;
        timerEl.textContent = timeLeft.toString();
      }
      if(timeLeft == 0){
        endGame();
        clearInterval(timeInterval);
      }
    }, 1000);
    
  }

//Begins the quiz when the start button is clicked
startButton.addEventListener("click", function(event){
    event.preventDefault();
    startButton.remove();
    countdown();
})

//Generates a new question from data
function newQuestion(){

}

//Takes the user's input and checks if it is correct
function checkAnswer(i){

}

//Ends the game when time is up
function endGame(){

}