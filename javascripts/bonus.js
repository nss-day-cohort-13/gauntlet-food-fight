var FoodFight = (function(bonus) {

  console.log("bonus function working" );

  bonus.setBonuses = function(hero, enemy) {
    
    var heroBonus = hero.bonus;
    console.log("hero bonus", heroBonus );
    var enemyBonus = enemy.bonus;
    console.log("enemy bonus", enemyBonus);

    if (hero.type === "Fruit") {
      heroBonus.push({name: "sweetness", attackpoints: 1, message: `Fruit is sweet, but here it's just a ruse. +1 attack!`})
    }
    //meat eater
    if (hero.type === "Meat" && enemy.name === "Mrs. Lovett") {
      enemyBonus.push({name: "meatEater", attackPoints: -2, message: "Mrs. Lovett loves Meat. Hero health reduced by 2."})

      //vegetable chopper
    } else if (hero.type === "Vegetable" && enemy.name === "Gordon Ramsey") {
      enemyBonus.push({name: "chopper", attackPoints: 1, message: "Gordon Ramsey is great at chopping. +1 enemy attack."})
    }else {
      heroBonus.push({name: "none", attackPoints: 1, healthPoints: 1, message: "no bonus."})
    }
  }


  return bonus;
}(FoodFight || {}))
