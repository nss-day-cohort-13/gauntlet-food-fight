
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
    this.weaponName = "Chinese Takeout"; 
    this.addedDamage = 3;
  }
  weapons.chineseTakeout.prototype = weapons.makeBasicWeapon;

  weapons.knife = function() {
    this.weaponName = "Knife"; 
    this.addedDamage = 3;
  }
  weapons.knife.prototype = weapons.makeBasicWeapon;

  weapons.fryingPan = function() {
    this.weaponName = "Frying Pan"; 
    this.addedDamage = 3;
  }
  weapons.fryingPan.prototype = weapons.makeBasicWeapon;

  weapons.meatTenderizer = function() {
    this.weaponName = "Meat Tenderizer";
    this.addedDamage = 3;
  }


  weapons.setPicture = function(currentHero) {
    console.log("setting picture now");

    var picture = ``

  }


  return weapons;

}(FoodFight || {}))
