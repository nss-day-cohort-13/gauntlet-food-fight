var FoodFight = (function(enemy) {

  enemy.Player2 = function () {
    this.health = 50
    this.attack = 10
  }

  enemy.player2 = new enemy.Player2();
  return enemy

})(FoodFight ||{})

console.log(FoodFight.player2);