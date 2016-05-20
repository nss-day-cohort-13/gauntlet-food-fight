var FoodFight = (function(enemy) {

  function Enemy () {
    this.health = 50

  }

  enemy.player2 = new Enemy();
  return enemy

})(FoodFight ||{})

console.log(FoodFight.player2);