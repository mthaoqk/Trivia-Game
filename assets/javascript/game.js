window.onload = function(){
	$("#start").on("click", clock.start);

	//Quiz
	function buildQuiz() {
	  const output = [];

	  myQuestions.forEach((currentQuestion, questionNumber) => {
		const answers = [];
		for (letter in currentQuestion.answers) {
		  answers.push(
			`<label>
			  <input type="radio" name="question${questionNumber}" value="${letter}">
			  ${letter} :
			  ${currentQuestion.answers[letter]}
			</label>`
		  );
		}
		output.push(
		  `<div class="question"> ${currentQuestion.question} </div>
		  <div class="answers"> ${answers.join("")} </div>`
		);
	  });
	  quizContainer.innerHTML = output.join("");
	}
  
	function showResults() {

	  const answerContainers = quizContainer.querySelectorAll(".answers");
  
	  let numCorrect = 0;
  
	  myQuestions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		if (userAnswer === currentQuestion.correctAnswer) {
		  numCorrect++;

		  answerContainers[questionNumber].style.color = "green";
		} else {
		  answerContainers[questionNumber].style.color = "red";
		}
	  });
  
	  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}
  
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
	const myQuestions = [
			{
			question: "This famous shoe brands original name was Blue Sports Ribbon",
			answers: {
				a: "Nike",
				b: "Adidas",
				c: "Asics",
				d: "Reebok"
			},
			correctAnswer: "a"
		},
		{
			question: "Run DMC was endorsed by this brand after a performance at Madison Square Garden",
			answers: {
					a: "Puma",
					b: "Champion",
					c: "Nike",
					d: "Adidas"
			},
			correctAnswer: "d"
		},
		{
			question: "This signature athlethe was so popular, his own signature line of shoes became its own brand?",
			answers: {
				a: "Bo Jackson",
				b: "Ken Griffey Jr.",
				c: "Michael Jordan",
				d: "Magic Johnson"
			},
			correctAnswer: "c"
		},
		{
			question: "Michael Jordans first choice of brand to sign was?",
			answers: {
				a: "Adidas",
				b: "Converse",
				c: "Reebok",
				d: "Puma"
			},
			correctAnswer: "a"
		},
		{
			question: "The original nike swoosh was bought for?",
			answers: {
				a: "35$",
				b: "125$",
				c: "580$",
				d: "1430$"
			},
			correctAnswer: "a"
		}
		
		];
	buildQuiz();
	submitButton.addEventListener("click", showResults);
};
//Timers
  var intervalId;

  var clockRunning = false;

  var clock = {
  
    time:60,

    start: function() {
      if (!clockRunning) {
        intervalId = setInterval(clock.count, 100);
				clockRunning = true;
				if (time === 0){
					alert("Time's up!")
						}
						
      }
    },
    count: function() {
      clock.time--;
      var converted = clock.timeConverter(clock.time);
      $("#display").text(converted);
		},
		
        timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
	}};
	function timeUp() {
		$("#results").append("<h2>Time's Up!</h2>");
		console.log("time is up");}