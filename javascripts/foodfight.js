var FoodFight = (function(fight) {
  //get player 1 (functionality to allow for different options later)
  var hero = FoodFight.Larry;
  //get player 2 (functionality to allow for different options later)
  var enemy = FoodFight.player2;

  //output player info to dom info div.
  $("#heroInfo").text(`${hero.name}`);
  $("#enemyInfo").text(`${enemy.name}`);


  var currentHeroHealth = hero.health;
  var currentEnemyHealth = enemy.health;

  //initial output to dom of current health. We also use this function as part of the attack button.
  fight.outputCurrentHealths = function() {
    $("#currentHeroHealth").text(`Current Health: ${currentHeroHealth}`);
    $("#currentEnemyHealth").text(`Current Health: ${currentEnemyHealth}`);
  }

  fight.outputCurrentHealths();


  //event listener for attack button.
  $("#attackButton").on("click", function(){

    //find out damage each player makes.
    var heroAttack= Math.floor(Math.random() * (hero.attack + 1));
    var enemyAttack = Math.floor(Math.random()* (enemy.attack + 1));



    //subtract current damage from health.
    fight.updateHeroHealth(enemyAttack);
    fight.updateEnemyHealth(heroAttack);
    //update DOM.
    fight.outputCurrentHealths();
    fight.logAttacks(heroAttack, enemyAttack);

    //check if any healths are zero.
    FoodFight.checkForDeath(currentHeroHealth, currentEnemyHealth);
  });



  fight.updateHeroHealth = function(enemyAttack) {
    currentHeroHealth -= enemyAttack;
    return currentHeroHealth;

  };

  fight.updateEnemyHealth = function(heroAttack) {
    currentEnemyHealth -= heroAttack;
    return currentEnemyHealth;
  };

  fight.logAttacks = function(heroAttack, enemyAttack) {
    $("#battleLog").text(`${enemy.name} attacked ${hero.name} and caused ${enemyAttack} damage. ${hero.name} attacked ${enemy.name} and caused ${heroAttack} damage.`)
  }



  return fight;
} (FoodFight || {}))
