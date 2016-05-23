
var FoodFight = (function(weapons) {

  //empty basic weapon object prototype- mainly for practice as at this point none of the weapons have anything in common. 
  var basicWeapon = function() {
    this.weaponName = "";
    this.addedDamage = "";
    this.picture = "";
  }
  weapons.makeBasicWeapon = new basicWeapon();


  //indiv weapon options
  weapons.chineseTakeout = function() {
    this.weapon = "chineseTakeout"
    this.weaponName = "Chinese Takeout"; 
    this.addedDamage = 3;
  }
  weapons.chineseTakeout.prototype = weapons.makeBasicWeapon;

  weapons.knife = function() {
    this.weapon = "knife"
    this.weaponName = "a Knife"; 
    this.addedDamage = 3;
  }
  weapons.knife.prototype = weapons.makeBasicWeapon;

  weapons.fryingPan = function() {
    this.weapon = "fryingPan";
    this.weaponName = "a Frying Pan"; 
    this.addedDamage = 3;
  }
  weapons.fryingPan.prototype = weapons.makeBasicWeapon;

  weapons.meatTenderizer = function() {
    this.weapon = "meatTenderizer";
    this.weaponName = "a Meat Tenderizer";
    this.addedDamage = 3;
  }

  //setting after current hero is chosen, since there are 24 different picture options.
  weapons.setPicture = function(currentHero) {

    var picture = `pics/${currentHero.species}-${currentHero.weapon.weapon}.jpeg`;
    return picture;

  }


  return weapons;

}(FoodFight || {}))
