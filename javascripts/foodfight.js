var FoodFight = (function(fight) {
  //get player 1 (functionality to allow for different options later)
  var hero = FoodFight.Larry;
  //get player 2 (functionality to allow for different options later)
  var enemy = FoodFight.player2;

  //TODO:output player 1 info to dom info div. 
  
  //TODO: output player 2 info to dom info div. 
  

  var currentHeroHealth = hero.health;

  var currentEnemyHealth = enemy.health;

  //initial output to dom of current health. 
  fight.outputCurrentHealths = function() {
    $("#currentHealthPlayer1").text(`Current Health: ${currentHeroHealth}`);
    $("#currentHealthPlayer2").text(`Current Health: ${currentEnemyHealth}`);
  }

  fight.outputCurrentHealths();  


  //event listener for attack button.
  $("#attackButton").on("click", function(){

    //find out damage each player makes. 
    var heroAttack= Math.floor(Math.random() * (hero.attack + 1));
    var enemyAttack = Math.floor(Math.random()* (enemy.attack + 1));

    console.log("player 1 hit", heroAttack );
    console.log("player 2 hit", enemyAttack );

    //subtract current damage from health. 
    fight.updateHeroHealth(enemyAttack);
    fight.updateEnemyHealth(heroAttack);
    //update dom.
    fight.outputCurrentHealths();
    fight.logAttacks(heroAttack, enemyAttack);
  })



  fight.updateHeroHealth = function(enemyAttack) {
    currentHeroHealth -= enemyAttack;
    return currentHeroHealth;

  }

  fight.updateEnemyHealth = function(heroAttack) {
    currentEnemyHealth -= heroAttack;
    return currentEnemyHealth;
  }

  fight.logAttacks = function(heroAttack, enemyAttack) {
    ${"#"}
  }

  return fight;
} (FoodFight || {}))
