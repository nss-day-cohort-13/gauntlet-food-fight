var FoodFight = (function(fight) {
  
  var currentHeroHealth, currentEnemyHealth, hero, enemy;

  fight.setUpGame = function(currentHero, currentEnemy) {

  //get player 1 (functionality to allow for different options later)
  hero = currentHero;
  //get player 2 (functionality to allow for different options later)
  enemy = currentEnemy;

  //output player info to dom info div.
  $("#heroInfo").text(`${hero.name}`);
  $("#enemyInfo").text(`${enemy.name}`);
  
  //set current health to current max health. 
  currentHeroHealth = hero.health;
  currentEnemyHealth = enemy.health;

  //initial output of health to dom. 
  fight.outputCurrentHealths();  
  }


  // We also use this function as part of the attack button. 

  fight.outputCurrentHealths = function() {
    $("#currentHeroHealth").text(`Current Health: ${currentHeroHealth}`);
    $("#currentEnemyHealth").text(`Current Health: ${currentEnemyHealth}`);
  }




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
