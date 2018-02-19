//game ends when time runs out

//page will reveal # questions that players correctly and incorrectly (score board)

var triviaQuestions;
var timer;
var correctAnswers;
var incorrectAnswers;
var scoreBoard;
var unanweredQuestions;

// form multiple choice questions
//******player can only pick one answer per question

triviaQuestions = [
	{
		question:
			"Charles Manson founded 'The Family' cult in 1967. Manson beleived America would soon have a race war. After what Beatles song did he name the 'war' after?",

		answerChoices: [
			"Revolution",
			"Here Comes the Sun",
			"Hey Jude",
			"Helter Skelter"
		],

		correctAnswers: "Helter Skelter"
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

		correctAnswers: "Nike Decade"
	},

	{
		question:
			"Jim JOnes the most infamous cult leader in American history. Founded 'Peoples Temple.' How many members participated in the mass murder/suicde in 1978?",

		answerChoices: ["300", "768", "918", "Unknown"],

		correctAnswers: "918"
	},

	{
		question: "What is the Unification Church best known for? ",

		answerChoices: [
			"Mass marriage ceremonies",
			"Creating perfect children",
			"Reaching a spaceship to Hale-Bopp Comet",
			"All women in the cult were the leaders spiritual wives"
		],

		correctAnswers: "Mass marriage ceremonies"
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

		correctAnswers: "Mormon Church"
	}
];

//creating link to html questionScreen div

var myHTML = "";

for (var i = 0; i < triviaQuestions.length; i++) {
	// going to loop through the array to access each element in the array

	myHTML =
		'<span class="test">Testing out my script! loop #' +
		triviaQuestions[i][Object.keys(triviaQuestions[i])[0]] +
		"</span><br/><br/>";

	

	triviaQuestions[i][Object.keys(triviaQuestions[i])[0]];

	// now we need to access answerChoices

	var allAnswerChoices =
		triviaQuestions[i][Object.keys(triviaQuestions[i])[1]];

	for (var x = 0; x < allAnswerChoices.length; x++) {
		allAnswerChoices[x];
	}

	//access to every answer

	triviaQuestions[i][Object.keys(triviaQuestions[i])[2]];

	$("#question").html(myHTML);

	
	//wrapper.innerHTML = myHTML;
};

// limited amount of time to finish the quiz (timer)
//(countdown timer)

// document.getElementById("timer").innerHTML = 02 + ":" + 00;
// startTimer();

// function startTimer() {
// 	var presentTime = document.getElementById("timer").innerHTML;
// 	var timeArray = presentTime.split(/[:]+/);
// 	var m = timeArray[0];
// 	var s = checkSecond(timeArray[1] - 1);
// 	if (s == 59) {
// 		m = m - 1;
// 	}
// 	//if(m<0){alert('timer completed')}

// 	document.getElementById("timer").innerHTML = m + ":" + s;
// 	setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
// 	if (sec < 10 && sec >= 0) {
// 		sec = "0" + sec;
// 	} // add zero in front of numbers < 10
// 	if (sec < 0) {
// 		sec = "59";
// 	}
// 	return sec;
// }

//game ends when time runs out

//variables must start out to equal 0

correctAnswers = 0;
incorrectAnswers = 0;
unanweredQuestions = 0;

$("#buttonStart").click(function() {
	// when the button clicks at the start screen -- it would go to the question screen

	$("#startScreen").hide();

	$("#questionScreen").show();
});
