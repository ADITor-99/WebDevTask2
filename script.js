var currentQuestion = 0;
var totQuestions = questions.length;
var score = 0;

var container = getElementById('quizContainer');
var questionEl = getElementById('question');
var opt1 = getElementById('opt1');
var opt2 = getElementById('opt2');
var opt3 = getElementById('opt3');
var opt4 = getElementById('opt4');
var nextBtn = document.getElementById('nextButton');
var prevBtn = document.getElementById('prevButton');
var resultCont = document.getElementById('result');


function loadQuestion(questionIndex){

  var q = questions[questionIndex];
  questionEl.textContent = q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
  }

  function loadNextQuestion() {

      var selectedOption = document.querySelector('input[type=radio]:checked');
      if(!selectedOption){
        alert('Please select an option to proceed');
      }

      var answer = selectedOption.value
      if(answer == questions[currentQuestion].answer){
        score += 10;
      }

      selectOption.checked = false;

      currentQuestion++;

      if(currentQuestion == totQuestions-1){
        nextBtn.textContent = 'Finish';
      }

      if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'your score is' + score + 'out of 100';
      }

      loadQuestion(currentQuestion);

}

function loadPrevQuestion(){

  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert('Please select an option to preceed');
  }

  selectedOption.checked = false;

  currentQuestion--;
  loadQuestion(currentQuestion);

  if(currentQuestion == 0){
    prevBtn.style.display = 'none';
  }

}
