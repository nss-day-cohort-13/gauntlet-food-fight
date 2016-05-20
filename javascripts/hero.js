"use strict";
var FoodFight = (function(hero){

	function Player (name) {
		this.health = 50;
		this.name = name;
	}

	hero.player1 = new Player("Larry");

	return hero

})(FoodFight || {})
