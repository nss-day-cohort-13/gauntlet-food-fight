"use strict";

var FoodFight = (function(enemy) {

  enemy.Player2 = function (name) {
    this.name = name;
    this.health = 50;
    this.attack = Math.floor(Math.random()*20 + 1) + 1;
    this.allowedEnemies = [enemy.Paula, enemy.Gordon, enemy.Lovett, enemy.Guy];
    this.paulaSpecialty = [enemy.Paula.attackSpecialty, enemy.Paula.attackSpecialty2, enemy.Paula.attackSpecialty3]
    this.gordonSpecialty = [enemy.Gordon.attackSpecialty, enemy.Gordon.attackSpecialty2, enemy.Gordon.attackSpecialty3]
    this.lovettSpecialty = [enemy.Lovett.attackSpecialty, enemy.Lovett.attackSpecialty2, enemy.Lovett.attackSpecialty3]
    this.guySpecialty = [enemy.Guy.attackSpecialty, enemy.Guy.attackSpecialty2, enemy.Guy.attackSpecialty3]
    this.generateEnemy = function() {
    // get a random index from the name array
    var random = Math.round(Math.random() * (this.allowedEnemies.length -1));

    //get the string at the index
    var randomEnemy = this.allowedEnemies[random];

    //compose the corresponding enemy into the player object

    // this.name = randomEnemy.name;
    return randomEnemy;
    };
  };


  enemy.Paula = new enemy.Player2("Paula Dean");
  enemy.Paula.attackSpecialty = "Heart Attack! She throws a stick of butter";
  enemy.Paula.attackSpecialty2 = "Bacon Attack! She wraps you in bacon";
  enemy.Paula.attackSpecialty3 = "Insensitivity Attack! She hurls racist jokes at you.";

  enemy.Gordon = new enemy.Player2("Gordon Ramsey");
  enemy.Gordon.attackSpecialty = "Verbal Assault! He tells you to jump in the oven.";
  enemy.Gordon.attackSpecialty2 = "Verbal Assault! He puts bread on your head and calls you an idiot sandwich.";
  enemy.Gordon.attackSpecialty3 = "Verbal Assault! He calls you a panini head.";
  enemy.Gordon.attackSpecialty4 = "Verbal Assault! He calls you a useless sack of Yankee Doodle Dandy Shite.";

  enemy.Lovett = new enemy.Player2("Mrs. Lovett");
  enemy.Lovett.attackSpecialty = "Meat Pie Attack! You ate some bad pie.";

  enemy.Guy = new enemy.Player2("Guy Fiere");
  enemy.Guy.attackSpecialty = "Offensive Appearance! You are sick from watching Guy Fiere eat.";

  enemy.enemyPlayer = new FoodFight.Player2()
  return enemy;
})(FoodFight ||{});


