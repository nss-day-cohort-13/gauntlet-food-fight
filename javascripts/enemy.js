var FoodFight = (function(enemy) {

  enemy.Player2 = function () {
    this.health = 50;
    this.attack = Math.floor(Math.random()*20 + 1) + 1;
    this.name = ["Paula Dean":"Heart Attack! She throws a stick of butter", "Gordon Ramsey": "Verbal Assault! He tells you you should kill yourself.", "Mrs. Lovett": "Meat Pie Attack! You ate some bad pie.", "Guy Fiere": "Offensive Appearance! You are sick from watching him eat."];
    this.generateEnemy = function() {}
    // get a random index from the name array
    var random = Math.round(Math.random() * (this.name.length -1));

    //get the string at the index
    var randomEnemy = this.name[random];

    //compose the corresponding enemy into the player object
    this.name = new FoodFight.enemy[randomEnemy]();
    return this.
  }

  enemy.player2 = new enemy.Player2();
  return enemy;

})(FoodFight ||{})

console.log(FoodFight.player2);
