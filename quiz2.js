var startQuiz = document.querySelector("#start-btn");
var timerNumber = document.querySelector("#timer-number")
var instructions = document.querySelector('.instructions')
var questionContainer = document.querySelector('#question-container')
let currentQuestionsIndex

var questionElement = document.querySelector('#question')
var answerButtonsElement = document.querySelector('#answer-buttons')
var nextButton = document.querySelector('#next-btn')
var finishButton = document.querySelector('#finish-btn')
var userScore = document.querySelector('.user-score')
var scoreNumber = document.querySelector('#score-number')
var submitButton = document.querySelector('#button-addon2')
var highscore = document.querySelector('.highscore')
var backButton = document.querySelector('#back-btn')
var viewHighscore = document.querySelector('#view-highscore')
var clearHighscore = document.querySelector('#clear-btn')

var myTimer;
var count = 75;

var myClock = function (myClock) {
    count--
    timerNumber.innerHTML = count;
    if (count === 0) {
        clearInterval(myTimer);
    }
}

function clock() {
    instructions.classList.add('hide')
    questionContainer.classList.remove('hide')
    myTimer = setInterval(myClock, 1000);
}

startQuiz.addEventListener("click", function () {
    startGame()
    clock()
})

nextButton.addEventListener('click', function () {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    questionContainer.classList.remove('hide')
    startQuiz.classList.add('hide')
    currentQuestionsIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionsIndex])
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        finishButton.classList.remove('hide')
    }
}

function setStatusClass(e, correct) {
    clearStatusClass(e)
    if (correct) {
        e.classList.add('correct')
    } else {
        e.classList.add('wrong')
        e.addEventListener('click', function () {
            count = count - 10
        })
    }
}

function clearStatusClass(e) {
    e.classList.remove('correct')
    e.classList.remove('wrong')
}

finishButton.addEventListener('click', function () {
    clearInterval(myTimer)
    userScore.classList.remove('hide')
    questionContainer.classList.add('hide')
    finishButton.classList.add('hide')
    scoreNumber.innerText = count
})

viewHighscore.addEventListener('click', function () {
    clearInterval(myTimer)
    userScore.classList.add('hide')
    questionContainer.classList.add('hide')
    finishButton.classList.add('hide')
    startQuiz.classList.add('hide')
    instructions.classList.add('hide')
    highscore.classList.remove('hide')
})

// submitButton.addEventListener('click', function () {
//     highscore.classList.remove('hide')
//     userScore.classList.add('hide')
// })
        
backButton.addEventListener('click', function () {
    instructions.classList.remove('hide');
    highscore.classList.add('hide');
    startQuiz.classList.remove('hide');
    window.location.reload();
});

clearHighscore.addEventListener('click', function () {
    localStorage.clear(initials)
    lsOutput.classList.add('hide')
    // console.log(localStorage)
})


const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text+count
  ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items' , JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})





var questions = [
    {
        question: 'Arrays in Javascript can be used to store ____.',
        answer: [
            { text: 'Numbers and Strings', correct: false },
            { text: 'Other Arrays', correct: false },
            { text: 'Booleans', correct: false, },
            { text: 'All of the Above', correct: true }

        ]
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables. ',
        answer: [
            { text: 'Commas', correct: false },
            { text: 'Curly Brackets', correct: false },
            { text: 'Quotes', correct: true },
            { text: 'Parentheses', correct: false }
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answer: [
            { text: 'Strings', correct: false },
            { text: 'Booleans', correct: false },
            { text: 'Alerts', correct: true },
            { text: 'Numbers', correct: false }
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        answer: [
            { text: 'Quotes', correct: false },
            { text: 'Curly Brackets', correct: false },
            { text: 'Parantheses', correct: true },
            { text: 'Square Brackets', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            { text: 'Javascript', correct: false },
            { text: 'Terminal/Bash', correct: false },
            { text: 'For Loops', correct: false },
            { text: 'Console Log', correct: true }
        ]
    },
];