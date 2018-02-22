//game ends when time runs out

//page will reveal # questions that players correctly and incorrectly (score board)

var allQuestions;
var timer;
var correctAnswers;
var incorrectAnswers;
var scoreBoard;
var unanweredQuestions;

// form multiple choice questions
//******player can only pick one answer per question


allQuestions = [
	{
		question:
			"Charles Manson founded 'The Family' cult in 1967. Manson beleived America would soon have a race war. After what Beatles song did he name the 'war' after?",

		answerChoices: [
			"Revolution",
			"Here Comes the Sun",
			"Hey Jude",
			"Helter Skelter"
		],

		correctAnswers: 3
	},

	{
		question:
			"What shoes did the Heaven's Gate cult wear in the group suicde to catch the spaceship to Hale-Bopp Comet?",

		answerChoices: [
			"Air Jordan XI",
			"Nike Zoom Flight",
			"Nike Decade",
			"Fila 96' (Grant Hill II)"
		],

		correctAnswers: 2
	},

	{
		question:
			"Jim Jones the most infamous cult leader in American history. Founded 'Peoples Temple.' How many members participated in the mass murder/suicde in 1978?",

		answerChoices: ["300", "768", "918", "Unknown"],

		correctAnswers: 2
	},

	{
		question: "What is the Unification Church best known for? ",

		answerChoices: [
			"Mass marriage ceremonies",
			"Creating perfect children",
			"Reaching a spaceship to Hale-Bopp Comet",
			"All women in the cult were the leaders spiritual wives"
		],

		correctAnswers: 0
	},

	{
		question:
			"What church did the Fundamentalist Church of Jesus Christ of Latter-Day Saints leave to practice polygamy?",

		answerChoices: [
			"Baptist Church",
			"Mormon Church",
			"Catholic Church",
			"Orthodox Church"
		],

		correctAnswers: 1
	}
];

var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
	$("#question").html(
		parseInt(currentquestion) +
			1 +
			". " +
			allQuestions[currentquestion].question
	);
	var options = allQuestions[currentquestion].answerChoices;
	var formHtml = "";
	for (var i = 0; i < options.length; i++) {
		formHtml +=
			'<div><input type="radio" name="option" value="' +
			i +
			'" id="option' +
			i +
			'"><label for="option' +
			i +
			'">' +
			allQuestions[currentquestion].answerChoices[i] +
			"</label></div><br/>";
	}
	$("#form").html(formHtml);
	$("#option0").prop("checked", true);
}

function checkAns() {
	var test = $("input[name=option]:checked");
	if (
		$("input[name=option]:checked").val() ===
		allQuestions[currentquestion].correctAnswers
	) {
		correctAnswers++;
	}
}

$(document).ready(function() {
	$(".jumbotron").hide();
	$("#start").click(function() {
		$("#timerWrapper").show();
		document.getElementById("timer").innerHTML = 02 + ":" + 00;
		startTimer();
		$(".jumbotron").fadeIn();
		$(this).hide();
	});

	setupOptions();

	$("#next").click(function() {
		event.preventDefault();
		checkAns();
		currentquestion++;
		
		if (currentquestion < allQuestions.length) {
			setupOptions();
			if (currentquestion == allQuestions.length - 1) {
				$("#next").html("Submit");
				$("#buttonNext").hide();
				$("#next").click(function() {
					$(".jumbotron").hide();
					$("#timerWrapper").hide();
					$("#result")
						.html(
							"You correctly answered " +
								correctAnswers +
								" out of " +
								currentquestion +
								" questions! "
						)
						.hide();
					$("#result").fadeIn(1500);
				});
			}
		}
	});
});

//creating link to html questionScreen div

// limited amount of time to finish the quiz (timer)
//(countdown timer)


function startTimer() {
	var presentTime = document.getElementById("timer").innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);
	if (s == 59) {
		m = m - 1;
	}
	//if(m<0){alert('timer completed')}

	document.getElementById("timer").innerHTML = m + ":" + s;
	setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {
		sec = "0" + sec;
	} // add zero in front of numbers < 10
	if (sec < 0) {
		sec = "59";
	}
	return sec;
}

// //game ends when time runs out

// //variables must start out to equal 0

// correctAnswers = 0;
// incorrectAnswers = 0;
// unanweredQuestions = 0;

