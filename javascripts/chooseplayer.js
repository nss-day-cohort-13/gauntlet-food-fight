var FoodFight = (function(choose){

  //event listener to set character and show fight arena. 
  $("#characterChosen").on("click", function() {
    $("#fight").slideDown();
    $("#choosey").slideUp();
    currentHero = choose.setHero();
    currentEnemy = choose.generateEnemy();
    FoodFight.setUpGame(currentHero, currentEnemy);
  });

  choose.setHero = function(){
    var hero = FoodFight.Larry;
    return hero;
    //find the thing that is chosen and set it to hero. 
  };

  choose.generateEnemy= function(){
    var enemy = FoodFight.player2;
    return enemy;
    //set a new enemy using Keith's random thing. 
  }


  return choose;
}(FoodFight || {}))
