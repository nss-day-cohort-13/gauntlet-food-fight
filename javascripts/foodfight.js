var FoodFight = (function(fight) {
  
  var currentHeroHealth, currentEnemyHealth, hero, enemy;

  fight.setUpGame = function(currentHero, currentEnemy) {

  //get player 1 (functionality to allow for different options later)
  hero = currentHero;
  //get player 2 (functionality to allow for different options later)
  enemy = currentEnemy;

  //output player info to dom info div.
  $("#heroInfo").html(
    `<h1>${hero.name}</h1>
    <h3>a ${hero.species} with ${hero.weapon.weaponName}</h3>
    <img id="heroimg" class = "img-responsive" src = "${hero.picture}" alt = "picture">
    <p>Max Health: ${hero.health}</p>`
    );
  //output enemy info to the dom. 
  $("#enemyInfo").html(`<h1>${enemy.name}</h1><p>Max Health: ${enemy.health}</p><p>Randomized Max Attack: ${enemy.attack}</p>`);
  
  //set current health to current max health. 
  currentHeroHealth = hero.health;
  currentEnemyHealth = enemy.health;

  FoodFight.setBonuses(hero, enemy);

  //initial output of health to dom. 
  fight.outputCurrentHealths();  
  }


  // We also use this function as part of the attack button. 

  fight.outputCurrentHealths = function() {
    var replacementHeroHealth = $(`<div id = "currentHeroHealth">Current Health: ${currentHeroHealth}</div>`).hide();
    var replacementEnemyHealth = $(`<div id="currentEnemyHealth">Current Health: ${currentEnemyHealth}</div>`).hide();
    $("#currentHeroHealth").fadeOut();
    $("#currentHeroHealth").replaceWith(replacementHeroHealth);
    $("#currentHeroHealth").fadeIn();
    $("#currentEnemyHealth").fadeOut();
    $("#currentEnemyHealth").replaceWith(replacementEnemyHealth);
    $("#currentEnemyHealth").fadeIn();
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

    FoodFight.addBonuses(hero.bonus, enemy.bonus);

    //check if any healths are zero.
    FoodFight.checkForDeath(currentHeroHealth, currentEnemyHealth, hero, enemy);
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
    $("#battleLog").text("");

    var currentLog = $(`<p>${enemy.name} attacked ${hero.name} with ${enemy.attackSpecialty} and caused ${enemyAttack} damage. ${hero.name} attacked ${enemy.name} with ${hero.specialtyAttack}. This attack caused ${heroAttack} damage.</p>`);
    currentLog.hide().appendTo("#battleLog").fadeIn();
  }

  fight.addBonuses = function(herobonus, enemybonus) {

    $("#bonusLog").text("");

    herobonus.forEach(function(bonusobject) {
      currentEnemyHealth -= bonusobject.attackPoints || 0;
      currentHeroHealth += bonusobject.healthPoints || 0;
      var bonusMessage = $(`<p>${bonusobject.message}</p>`);
      bonusMessage.hide().appendTo("#bonusLog").delay(400).fadeIn();
      setTimeout(function (){fight.outputCurrentHealths()}, 1000) ;
    })
    enemybonus.forEach(function(bonusobject) {
      currentEnemyHealth += bonusobject.healthPoints || 0; 
      currentHeroHealth -= bonusobject.attackPoints || 0;
      var bonusMessage = $(`<p>${bonusobject.message}</p>`);
      bonusMessage.hide().appendTo("#bonusLog").delay(400).fadeIn();
      fight.outputCurrentHealths();
    })
  };




  return fight;
} (FoodFight || {}))
