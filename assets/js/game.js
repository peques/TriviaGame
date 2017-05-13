
var e = 0;





var gameData = [

	{
		question: "Bears. Beets. ___ ?",
		options: [" Battlestar Galactica ", " Bobblehead ", " Brown Bear ", " Black Bear "],
		answer: 0
	},

	{
		question: "Dwight you ignorant ___ .",
		options: [" idiot ", " dummy ", " moron ", " slut "],
		answer: 3
	},

	{
		question: "I'm not superstitious, but I am ___ .",
		options: [" Beyonce, always ", " Assistant to the Regional Manager ", " a little stitious ", " king of the world "],
		answer: 2
	},

	{
		question: "What is the name of the company everyone works for and what do they sell?",
		options: [" Mufflin Dinders; muffins ", " Dunder Mifflin; paper ", " Dunder Mufflin; mufflers ", " Munder Difflin; printers "],
		answer: 1
	},

	{
		question: "What kind of farm does Dwight run?",
		options: [" An Asparagus farm ", " A Broccoli farm ", " A Beet farm ", " A Tabacco farm "],
		answer: 2
	},

	{
		question: "Where did Jim hide Dwight's desk?",
		options: [" The roof ", " The parking lot ", " The breakroom ", " The bathroom "],
		answer: 3
	},

	{
		question: "Who does Michael hit with his car?",
		options: [" Santa Claus ", " Meredith ", " David Wallace, the CFO ", " Ron Swanson "],
		answer: 1
	},

	{
		question: "Who does Dwight bring as a date to Michael and Jan's dinner party?",
		options: [" Carrol ", " Pam ", " An Escort ", " His Nanny "],
		answer: 3
	},

	{
		question: "What did Michael burn his foot on?",
		options: [" A George Forman grill ", " Hot coal walk ", " A stove ", " A furnace "],
		answer: 0
	},

	{
		question: "What did Dwight leave in Angela's freezer?",
		options: [" Beets ", " A bear ", " Her dying cat ", " A dead goose he ran over "],
		answer: 2
	}

];


		
					



					// QUESTION 1
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q1").append("<p>" + gameData[0].options + "</p>");
		$('#q1').append('<button>' + gameData[0].options[i] + '</button>');

			if (i === gameData[e].answer) {
				console.log($('button:last').addClass('correct'));
			}
	}

					// QUESTION 2
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q2").append("<p>" + gameData[1].options + "</p>");
		$('#q2').append('<button>' + gameData[1].options[i] + '</button>');

			if (i === gameData[e].answer) {
				console.log($('button:last').addClass('correct'));
			}
	}

					// QUESTION 3
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q3").append("<p>" + gameData[2].options + "</p>");
		$('#q3').append('<button>' + gameData[2].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 4
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q4").append("<p>" + gameData[3].options + "</p>");
		$('#q4').append('<button>' + gameData[3].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 5
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q5").append("<p>" + gameData[4].options + "</p>");
		$('#q5').append('<button>' + gameData[4].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 6
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q6").append("<p>" + gameData[5].options + "</p>");
		$('#q6').append('<button>' + gameData[5].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 7
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q7").append("<p>" + gameData[6].options + "</p>");
		$('#q7').append('<button>' + gameData[6].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 8
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q8").append("<p>" + gameData[7].options + "</p>");
		$('#q8').append('<button>' + gameData[7].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 9
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q9 ").append("<p>" + gameData[8].options + "</p>");
		$('#q9').append('<button>' + gameData[8].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}

					// QUESTION 10
	for (i = 0; i < gameData[e].options.length; i++){
		//$("#q10").append("<p>" + gameData[9].options + "</p>");
		$('#q10').append('<button>' + gameData[9].options[i] + '</button>');

			if (i === gameData[e].answer) {
				$('button:last').addClass('correct');
			}
	}



    





					
		// for (var i = 0; i < gameData[e].options.length; i++) {
		// 	$('#q1').append('<button>' + gameData[e].options[i] + '</button>');

			// if (i === gameData[e].answer) {
			// 	$('button:last').addClass('correct');
			// }







// -----------------Timer Function-------------------------

var count=60;

var counter=setInterval(timer, 1000);

	function timer()
{
  count=count-1;
  if (count <= 0)
  {
  	//alert('Game Over!');
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs";
}
// -----------------Timer Function-------------------------



 








