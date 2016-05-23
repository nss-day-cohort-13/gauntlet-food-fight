var FoodFight = (function(bonus) {

  bonus.setBonuses = function(hero, enemy) {
    //meat eater
    if (hero.type === "Meat" && enemy.name === "Mrs. Lovett") {
      hero.bonus.push({bonus.name: "meatEater", bonus.healthPoints: -2, bonus.message: "Mrs. Lovett loves Meat. Health reduced by 2."})

      //vegetable chopper
    } else if (hero.type === "Vegetable" && enemy.name === "Gordon Ramsey") {
      enemy.bonus.push({bonus.name: "chopper", bonus.attackPoints: 1, bonus.message: "Gordon Ramsey is great at chopping. +1 attack points."})
    }
  }


  return bonus;
}(FoodFight || {})
