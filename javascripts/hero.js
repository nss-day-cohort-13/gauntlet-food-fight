"use strict";
var FoodFight = (function(hero){

	var Player1 = function (name) {
		this.health = 50;
		this.attack = 10;
		this.name = name;
	}

	var Vegetable = function (name) {
		Player1.call(this, name);
		this.health += 20;
		this.attack -= 2;
	}
	Vegetable.prototype = Object.create(Player1.prototype);

	var Meat = function(name) {
		Player1.call(this, name);
		this.health += 10;
		this.attack += 10;
	}
	Meat.prototype = Object.create(Player1.prototype);

	var Fruit = function (name) {
		Player1.call(this, name);
		this.health += 5;
		this.attack -= 3;
	}
	Fruit.prototype = Object.create(Player1.prototype);

	hero.Tomato = function (name) {
		Vegetable.call(this, name);
		this.specialtyAttack = "Spits seeds";
	}
	hero.Tomato.prototype = Object.create(Vegetable.prototype);

	hero.Potato = function (name) {
		Vegetable.call(this, name);
		this.specialtyAttack = "Laser Eyes";
	}
	hero.Potato.prototype = Object.create(Vegetable.prototype);

	hero.Lobster = function (name) {
		Meat.call(this, name);
		this.specialtyAttack = "Claw Attack";
	}
	hero.Lobster.prototype = Object.create(Meat.prototype);

	hero.Cow = function (name) {
		Meat.call(this, name);
		this.specialtyAttack = "Chew Attack";
	}
	hero.Cow.prototype = Object.create(Meat.prototype);

	hero.Apple = function (name) {
		Fruit.call(this, name);
		this.specialtyAttack = "Arson Poisoning";
	}
	hero.Apple.prototype = Object.create(Fruit.prototype);

	hero.Peach = function (name) {
		Fruit.call(this, name);
		this.type = "peach";
		this.specialtyAttack = "Pit Attack";
	}
	hero.Peach.prototype = Object.create(Fruit.prototype);

	hero.Larry = new hero.Tomato("Larry");

	return hero;

})(FoodFight || {})
