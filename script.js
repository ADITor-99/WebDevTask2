var currentQuestion = 0;
var totQuestions = questions.length;
var score = 0;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var radio1 = document.getElementById('radio1');
var radio2 = document.getElementById('radio2');
var radio3 = document.getElementById('radio3');
var radio4 = document.getElementById('radio4');

var nextBtn = document.getElementById('nextButton');
var prevBtn = document.getElementById('prevButton');
var resultCont = document.getElementById('result');


function loadQuestion(){
  console.log(currentQuestion)
  radio1.checked = false
  radio2.checked = false
  radio3.checked = false
  radio4.checked = false

  if (questions[currentQuestion].answered){
    // document.querySelector('input[type=radio]:checked');
    var answer = questions[currentQuestion].userInput;
    switch(answer){
      case "1": {
        radio1.checked = true
        console.log("1 checked")
        break
      }
      case "2": {
        radio2.checked = true
        console.log("2 checked")
        break
      }
      case "3": {
        radio3.checked = true
        console.log("3 checked")
        break
      }
      case "4": {
        radio4.checked = true
        console.log("4 checked")
        break
      }
    }
  }

  questionEl.textContent = questions[currentQuestion].question;
  opt1.textContent = questions[currentQuestion].option1;
  opt2.textContent = questions[currentQuestion].option2;
  opt3.textContent = questions[currentQuestion].option3;
  opt4.textContent = questions[currentQuestion].option4;
  }

  function loadNextQuestion() {

      var selectedOption = document.querySelector('input[type=radio]:checked');
      if(!selectedOption){
        alert("Please select an option to proceed!")
      }

      var answer = selectedOption.value;

      if(!questions[currentQuestion].answered){
        console.log("Option selected"+answer)
        questions[currentQuestion].userInput = answer;
        questions[currentQuestion].answered = true;
      }

      if(answer == questions[currentQuestion].answer){
        score += 10;
      }

      currentQuestion++;

      if(currentQuestion == 0){
        prevBtn.style.display = 'none';
      }
      else {
        prevBtn.style.display = '';
      }

      if(currentQuestion == totQuestions-1){
        nextBtn.textContent = 'Finish';
      }

      if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'your score is ' + score + ' out of 100';
      }


      loadQuestion();

}

function loadPrevQuestion(){

  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert('Please select an option to proceed');
    return;
  }

  var answer = selectedOption.value;

  if(!questions[currentQuestion].answered){
    questions[currentQuestion].userInput = answer;
    questions[currentQuestion].answered = true;
  }

  selectedOption.checked = false;

  currentQuestion--;


  if(currentQuestion == 0){
    prevBtn.style.display = 'none';
  }
  else {
    prevBtn.style.display = '';
  }

  loadQuestion();

}

if(currentQuestion == 0){
  prevBtn.style.display = 'none';
}
else {
  prevBtn.style.display = '';
}

loadQuestion();
