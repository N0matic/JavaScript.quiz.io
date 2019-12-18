// Creating all variables to get started
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

// Questions are stored in arrays here
var questions = [
    {
        question: "Ecuador Was named after:",
        choiceA: "Equality",
        choiceB: "Equestrians",
        choiceC: "The Equator",
        choiceD: "Equal Sign",
        correct: "C"
    }, {
        question: "Which of these is NOT one of Ecuadors four main regions:",
        choiceA: "The Amazonian Jungle",
        choiceB: "The Campos Desert",
        choiceC: "The Andes Mountains",
        choiceD: "The Galpagos Islands",
        correct: "B"
    }, {
        question: "The Currency of Ecuador is:",
        choiceA: "The American Dollar",
        choiceB: "The Equadorian Dollar",
        choiceC: "The Equadorian Real",
        choiceD: "The Equadorian Peso",
        correct: "A"
    }, {
        question: "Ecuador shares a border with this Latin American Country:",
        choiceA: "Peru",
        choiceB: "Venezuela",
        choiceC: "Panama",
        choiceD: "Bolivia",
        correct: "A"
    }, {
        question: "'Cuy', a local delicacy, is made from cooked:",
        choiceA: "Alligator",
        choiceB: "Anaconda",
        choiceC: "Mountain Goat",
        choiceD: "Guinea Pig",
        correct: "D"
    }
];

// These variables are used to move the quiz and timer along
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 15; // 15s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

// This is function used to actually render a question:
function renderQuestion() {
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// Functions to start quiz go here
start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// This is the function used to render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// This is the function used to render the counter
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


// Here is the function to check the Answers
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// Here is the funciton to render the score
function scoreRender() {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";

    // calculate the final score
    var finalScore = score;

    scoreDiv.innerHTML += "<p>" + finalScore + "</p>";
}

// Restart Game Button
function restartGame() {
    window.location.reload();
};

// Final Score to High Score Screen
function highScores() {
    scoreDiv.style.display = "none";
    highScores.style.display = "block";
}