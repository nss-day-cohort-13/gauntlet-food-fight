"use strict";
var FoodFight = (function(hero){

	function Player (name) {
		this.health = 50;
		this.attack = 10;
		this.name = name;
	}

	hero.player1 = new Player("Larry");

	return hero

})(FoodFight || {})
