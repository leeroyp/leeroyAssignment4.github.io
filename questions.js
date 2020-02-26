const startButton = document.getElementById('Start-btn')
var funcEl = document.getElementById("func container")
var scoresEl = document.getElementById("high-scores")

startButton.addEventListener('click', function(){
    clock(); 
    renderQuestion()   
});

scoresEl.addEventListener('click', function(){
    scores()
     
});


// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  ["Which language is used for styling web pages?", "HTML", "JQuery", "CSS", "A"],
  ["Which is not a JavaScript Framework?", "Python Script", "JQuery","Django",  "B"], 
  ["Hyper Text Markup Language Stand For?", "XHTML","CSS", "HTML", "C"],
  ["Which languages hasn't been covered in class yet?", "JavaScript", "HTML", "React", "A"]
  ];
 
//   We use this functions in order to use get instead of getElement 
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){


  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>Total score =  "+correct*25+"  </h2>";
    get("test_status").innerHTML = "Test completed";

    clearInterval(myTimer);
    myFunction()

    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}


// Checking for the answer
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++; 
    
  }else 
    t=t-5
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);


//Stopwatch

var t = 60;
var myTimer;
var myClock= function (){
  t--
  document.getElementById("timer").innerHTML = t;
  if (t === 0) {
  clearInterval(myTimer);

  test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
  get("test_status").innerHTML = "Test completed";

  myFunction();

//   initials.classList.remove('hide')


  }
};
function clock() {

    funcEl.classList.remove('hide')
    startButton.classList.add('hide')

    myTimer = setInterval(myClock, 1000);
   
};

function scores() {

 
  console.log("click,click")

  
};

// var y = document.createElement("INPUT");

// function myFunction() {
//     var x = document.createElement("FORM");
//     x.setAttribute("id", "myForm");
//     document.body.appendChild(x);
  
 
//     y.setAttribute("type", "text");
//     y.setAttribute("value", "");
//     document.getElementById("myForm").appendChild(y);

//   }

 
//   const ul = document.querySelector('ul')
//   const input = y
//   let itemsArray = localStorage.getItem(y) ? JSON.parse(localStorage.getItem(y)) : []
  
//   localStorage.setItem(y, JSON.stringify(itemsArray))
//   const data = JSON.parse(localStorage.getItem(y))
  
//   const liMaker = text => {
//     const li = document.createElement('li')
//     li.textContent = text
//     ul.appendChild(li)
//   }
  



//   form.addEventListener('keypress', function (e) {
//         if (e.key === 'Enter') {
          
//             itemsArray.push(input.value)
//             localStorage.setItem(y, JSON.stringify(itemsArray))
//             liMaker(input.value)
//             input.value = ''
//         }
   
  
   
// });
  
//   data.forEach(item => {
//     liMaker(item)
//   })