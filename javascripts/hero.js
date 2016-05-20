"use strict";
var FoodFight = (function(hero){

	hero.Player1 = function (name) {
		this.health = 50;
		this.attack = 10;
		this.name = name;
	}

	hero.Larry = new hero.Player1("Larry");

	return hero;

})(FoodFight || {})
