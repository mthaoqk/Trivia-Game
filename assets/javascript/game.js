$(document).ready(function () {

	window.onload = function () {
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
					a: "1$",
					b: "35$",
					c: "65$",
					d: "100$"
				},
				correctAnswer: "b"
			}

		];
		buildQuiz();
		submitButton.addEventListener("click", showResults);
	};
	//Timers
	var number = 30;
	var intervalId;
	$("#start").on("click", run);

	function run() {
		clearInterval(intervalId)
		intervalId = setInterval(decrement, 1000);

	}
	function decrement() {
		number--;
		$("#display").html("<h2>" + number + "</h2>");

		if (number === 0) {
			stop();
			alert("Times up");

		}
		
	}
	function stop() {
		clearInterval(intervalId);
	}


});