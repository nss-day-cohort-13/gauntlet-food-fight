var FoodFight = (function(bonus) {

  bonus.setBonuses = function(hero, enemy) {
    
    var heroBonus = hero.bonus;
    var enemyBonus = enemy.bonus;

    //fruits 
   if (hero.type === "Fruit") {

    heroBonus.push({name: "sweetness", attackPoints: 1, message: "Fruit is sweet. Dangerously sweet. +1 hero attack."});
    //fruit enemy bonuses
    if (enemy.name === "Paula Deen") {
      enemyBonus.push({name: "pie", attackPoints: 1, message: "Paula Dean makes a Fruit Pie. How disturbing. -1 hero health."})
    } else if (enemy.name === "Guy Fiere") {
      enemyBonus.push({name: "fruitIsGross", healthPoints: -1, message: "Guy thinks fruit is NOT MONEY. -1 enemy health."})
    }

    //apple weapon bonuses
    
    //peach weapon bonuses

    //Meats
   } else if (hero.type === "Meat") {

    //meat enemy bonuses 
    if (enemy.name === "Mrs. Lovett") {
      enemyBonus.push({name: "meatpie", attackPoints: 3, message: "Mrs. Lovett bakes meat pies out of ALL THE MEAT. Waste not, want not! -3 hero health."})
    } else if (enemy.name === "Gordon Ramsey") {
      heroBonus.push({name: "undercooked", attackPoints: 1, message: "This meat is not fancy enough for Mr. Ramsay. -1 enemy health."})
    }

    //cow weapon bonuses
    if (hero.species === "cow") {
      console.log("future" );
    
    //lobster weapon bonuses
    } else if (hero.species === "lobster") { 
      
      if (hero.weapon.weapon==="fryingPan") {
      heroBonus.push({name: "musicalPan", attackPoints: 2, message: "Sebastian and his frying pan make a great singing team. -2 enemy health."})
      }
     } 
    //Vegetables
    } else if (hero.type === "Vegetable") {

      //vegetable enemy bonuses 
      if (enemy.name === "Paula Deen") {
      heroBonus.push({name: "ewveggies", attackPoints: 2, message: "Paula Deen has no idea what to do with vegetables. -2 enemy health."})
      } else if (enemy.name === "Gordon Ramsey") {
        enemyBonus.push({name: "chopper", attackPoints: 3, message: "Gordon Ramsay is GREAT at chopping. -3 hero health." })
      }

      //potato weapon bonuses 
    
      //tomato weapon bonuses
    } else {
      console.log("no bonuses?????");
    }

    //ramsey weapon bonuses
  if (enemy.name === "Gordon Ramsey") {


    //paula weapon bonuses
  } else if (enemy.name === "Paula Deen") {


    //guy weapon bonuses
  } else if (enemy.name === "Guy Fiere") {

    //lovett weapon bonuses
  } else if (enemy.name === "Mrs. Lovett") {
  } else {
    console.log("no enemy bonuses????" );
  };
}
  return bonus;
}(FoodFight || {}))
