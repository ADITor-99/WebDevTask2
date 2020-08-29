var currentQuestion = 0;
var totQuestions = questions.length;
var score = 0;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextBtn = document.getElementById('nextButton');
var prevBtn = document.getElementById('prevButton');
var resultCont = document.getElementById('result');


function loadQuestion(questionIndex){

  var q = questions[questionIndex];

  if(q.answered == "true"){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    var answer = selectedOption.value;
    answer = q.userInput;
  }

  questionEl.textContent = q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
  }

  function loadNextQuestion() {

      var selectedOption = document.querySelector('input[type=radio]:checked');
      if(!selectedOption){
        alert("Please select an option to proceed!")
      }

      var answer = selectedOption.value;

      if(questions[currentQuestion].answered == "false"){
        questions[currentQuestion].userInput.push = answer;
        questions[currentQuestion].answered.push = "true";
      }

      if(answer == questions[currentQuestion].answer){
        score += 10;
      }

      currentQuestion++;
      answer.checked = false;

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


      loadQuestion(currentQuestion);
      selectedOption.checked = false;

}

function loadPrevQuestion(){

  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert('Please select an option to preceed');
    return;
  }

   var answer = selectedOption.value;

  if(questions[currentQuestion].answered == "false"){
    questions[currentQuestion].userInput.push = answer;
    questions[currentQuestion].answered.push = "true";
  }

  selectedOption.checked = false;

  currentQuestion--;


  if(currentQuestion == 0){
    prevBtn.style.display = 'none';
  }
  else {
    prevBtn.style.display = '';
  }

  loadQuestion(currentQuestion);

}

if(currentQuestion == 0){
  prevBtn.style.display = 'none';
}
else {
  prevBtn.style.display = '';
}

loadQuestion(currentQuestion);
