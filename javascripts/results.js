var FoodFight = (function (results) {
	var resultsDiv = $("#results");
	var resetBtn = $("#resetButton");
	var modal = $(".modalDiv");

	function playAgain () {
		$("#fight").slideUp();
		$("#choosey").slideDown();
		modal.hide("slow");
		$("#battleLog").text("");
	}

	results.checkForDeath = function(hero, enemy) {
		if (hero <= 0 || enemy <= 0) {
			modal.show("slow");
			if(hero <= 0 && enemy <= 0) {
				resultsDiv.text(`You have both been defeated. Would you like to play again?`);
			}
			else if (hero <= 0) {
				resultsDiv.text(`Sorry you've been defeated. Would you like to play again?`);
			}
			else if(enemy <= 0) {
				resultsDiv.text(`You are the victor! Would you like to play again?`);
			}
		}
		resetBtn.click(playAgain);
	}

	return results;

})(FoodFight || {})
