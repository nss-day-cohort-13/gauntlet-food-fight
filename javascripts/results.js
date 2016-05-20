var FoodFight = (function (results) {
	var resultsDiv = $("#results");
	var resetBtn = $("#resetButton");
	var modal = $(".modalDiv");

	function playAgain () {
		modal.hide();
	}

	results.checkForDeath = function(hero, enemy) {
		if (hero <= 0 || enemy <= 0) {
			modal.show();
			if(hero <= 0 && enemy <= 0) {
				resultsDiv.append(`<p class="resultP">You have both been defeated. Would you like to play again?`);
			}
			else if (hero <= 0) {
				resultsDiv.append(`<p class="resultP">Sorry you've been defeated. Would you like to play again?</p>`);
			}
			else if(enemy <= 0) {
				resultsDiv.append(`<p class="resultP">You are the victor! Would you like to play again?</p>`);
			}
		}
		resetBtn.click(playAgain);
	}

	return results;

})(FoodFight || {})
