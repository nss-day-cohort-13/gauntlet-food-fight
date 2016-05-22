var FoodFight = (function(choose){
  var heroBtn = $(".heroBtn");
  var userName = $("#name");
  var selected;
  //event listener to set character and show fight arena.
  $("#characterChosen").on("click", function() {
    $("#fight").slideDown();
    $("#choosey").slideUp();
    currentHero = choose.setHero();
    currentEnemy = choose.generateEnemy();
    FoodFight.setUpGame(currentHero, currentEnemy);
  });

  heroBtn.click(function() {
    selected = heroBtn.filter(":checked").val();
    console.log(selected);
  });

  choose.setHero = function(){
    var name = userName.val()
    var hero = new FoodFight[selected](name);
    return hero;
    //find the thing that is chosen and set it to hero.
  };

  choose.generateEnemy= function(){
    var enemy = FoodFight.enemyPlayer.generateEnemy();
    return enemy;
    //set a new enemy using Keith's random thing.
  }


  return choose;
}(FoodFight || {}))
