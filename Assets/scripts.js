// All questions and associated answers
var questions = [
    // Question 1
    {
        Question: "Commonly used data types DO NOT include:",
        Choices: ["strings", "booleans", "alerts", "numbers"],
        Answer: "alerts"
    },

    // Question 2
    {
        Question: "The condition in an if / else statement is enclosed within ____.",
        Choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        Answer: "parentheses"
    },
];

// On loading the page, the quiz prepares itself

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var beginButton = document.getElementById('begin');

function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    questions.forEach(
        (currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() { }

// Starts Quiz
submitButton.addEventListener('click', buildQuiz);

buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
