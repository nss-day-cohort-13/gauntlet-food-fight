var FoodFight = (function(bonus) {
  bonus.setBonuses = function(hero, enemy) {
    hero.bonus = [];
    enemy.bonus = [];
    var heroBonus = hero.bonus;
    var enemyBonus = enemy.bonus;
    var thisAttackNumber = Math.random();
    console.log("this attack number", thisAttackNumber );


    //fruits 
    if (hero.type === "Fruit") {
      heroBonus.push({
        name: "sweetness",
        attackPoints: 1,
        message: "BONUS: Fruit is sweet. Dangerously sweet. +1 hero attack."
      });
      //fruit enemy bonuses
      if (enemy.name === "Paula Deen") {
        enemyBonus.push({
          name: "pie",
          attackPoints: 1,
          message: "BONUS: Paula Dean makes a Fruit Pie. How disturbing. -1 hero health."
        })
      } else if (enemy.name === "Guy Fieri") {
        enemyBonus.push({
          name: "fruitIsGross",
          healthPoints: -1,
          message: "BONUS: Guy thinks fruit is NOT MONEY. -1 enemy health."
        })
      }
      //apple weapon bonuses
      if (hero.species === "Apple") {
        if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "vanity",
            attackPoints: -1,
            message: "BONUS: frying pan hits on Apple while she's trying to hit on her enemy... it doesn't go too well. -1 hero attack."
          })
          if (enemy.species === "lovett") {
            heroBonus.push({
              name: "doubleVanity",
              healthPoints: 1,
              message: "BONUS: frying pan also hits on Mrs. Lovett. How distracting for her and convenient for apple. +1 hero health."
            })
          }
        } else if (hero.weapon.weapon === "chineseTakeout") {
          heroBonus.push({
            name: "nofriends",
            healthPoints: -1,
            message: "BONUS: No fruits were used in the making of this chinese food. -1 hero health."
          })
        } else if (hero.weapon.weapon === "meatTenderizer" && enemy.species ===
          "gordonRamsay") {
          heroBonus.push({
            name: "bitchOut",
            attackPoints: 3,
            message: "BONUS: Apple can totally outyell Gordon Ramsay. +3 hero attack."
          })
        } else if (hero.weapon.weapon === "knife") {
          heroBonus.push({
            name: "specialknife",
            attackPoints: -1,
            message: "BONUS: Apple would hate to break a nail using this unrefined knife. -1 hero attack. "
          })
        }
        //peach weapon bonuses
      } else if (hero.species === "Peach") {
        if (hero.weapon.weapon === "chineseTakeout") {
          heroBonus.push({
            name: "Ipreferdonuts",
            healthPoints: -1,
            message: "BONUS: Peach prefers donuts. -1 hero attack."
          })
          if (enemy.species === "guyFieri") {
            heroBonus.push({
              name: "MONEY",
              attackPoints: 2,
              message: "BONUS: Guy loves his spicy hot Chinese Takeout! +2 hero attack. "
            })
          }
        } else if (hero.weapon.weapon === "knife") {
          heroBonus.push({
            name: "threatening",
            attackPoints: 1,
            message: "BONUS: Peach knows how to use a big knife for intimidation as well as slicing and dicing. +1 hero attack."
          })
          if (enemy.species === "lovett") {
            heroBonus.push({
              name: "notamused",
              attackPoints: -2,
              message: "BONUS: Mrs Lovett is not impressed by the Peach. She prefers the Johnny Depp type. -2 hero attack."
            })
          }
        } else if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "sunglasses",
            healthPoints: 2,
            message: "BONUS: Peach and the frying pan have matching sunglasses. Like bosses. +2 hero health."
          })
        } else if (hero.weapon.weapon === "meatTenderizer" && enemy.species ==
          "paulaDean") {
          heroBonus.push({
            name: "nothingIcanDo",
            healthPoints: -5,
            message: "There's nothing the peach can do against Paula Dean's inevitable pie-making. This meat tenderizer makes it even worse. -5 hero health."
          })
        }
      }
      //Meats
    } else if (hero.type === "Meat") {
      //meat enemy bonuses 
      if (enemy.name === "Mrs. Lovett") {
        enemyBonus.push({
          name: "meatpie",
          attackPoints: 3,
          message: "BONUS: Mrs. Lovett bakes meat pies out of ALL THE MEAT. Waste not, want not! -3 hero health."
        })
      } else if (enemy.name === "Gordon Ramsay") {
        heroBonus.push({
          name: "undercooked",
          attackPoints: 1,
          message: "BONUS: This meat is not fancy enough for Mr. Ramsay. -1 enemy health."
        })
      }
      //cow  bonuses
      if (hero.species === "cow") {
        //cow weapon bonuses
        if (hero.weapon.weapon === "chineseTakeout") {
          heroBonus.push({
            name: "messy",
            healthPoints: 2,
            message: "BONUS: Chinese takeout is also a meal, and Cow is always hungry. +2 hero health."
          })
        } else if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "dontcookmyfriends",
            healthPoints: -1,
            message: "BONUS: Don't cook my friend the pig! Cow is disturbed by his weapon the frying pan. -1 hero health."
          })
        } else if (hero.weapon.weapon === "knife") {
          heroBonus.push({
            name: "clumsycow",
            attackPoints: -1,
            message: "BONUS: Cow is pretty clumsy and this knife is awfully small. -1 attack points."
          })
          if (enemy.species === "paulaDean") {
            heroBonus.push({
              name: "bigtarget",
              attackPoints: +1,
              message: "Paula is an awfully big target though. Cow can hit her even though he's clumsy. +1 attack."
            })
          }
        } else if (hero.weapon.weapon === "knife" && enemy.species ===
          "lovett") {
          heroBonus.push({
            name: "meatsrevenge",
            attackPoints: 4,
            message: "BONUS: REVENGE OF THE MEAT!!!! attack points +4!!!!"
          })
        }
        //lobster bonuses
      } else if (hero.species === "Lobster") {
        if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "musicalPan",
            attackPoints: 2,
            message: "BONUS: Sebastian and his frying pan make a great singing team. -2 enemy health."
          })
        } else if (hero.weapon.weapon === "meatTenderizer") {
          heroBonus.push({
            name: "carapace",
            healthPoints: 1,
            message: "BONUS: the lobster's hard shell makes him immune to all smashing! +1 hero health."
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && enemy.species ===
          "gordonRamsay") {
          heroBonus.push({
            name: "nofriedfood",
            attackPoints: -4,
            message: "BONUS: Ramsay hates fried food and flies into a rage at seeing these crazy egg rolls!!!! +4 enemy health."
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && enemy.species ===
          "paulaDean") {
          heroBonus.push({
            name: "distractingfried",
            attackPoints: 2,
            message: "BONUS: Paula looooooooves her fried food. +2 hero attack."
          })
        } else if (hero.weapon.weapon === "knife") {
          heroBonus.push({
            name: "toobig",
            healthPoints: -1,
            message: "BONUS: what an enormous knife! way too big for a little lobster. -1 hero health."
          })
        } else if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "singingBonus",
            attackPoints: 1,
            message: "BONUS: singing frying pan and lobster make a great team. +1 hero attack."
          })
          if (enemy.species === "lovett" && enemy.weapon.weapon ===
            "fryingPan") {
            heroBonus.push({
              name: "quartet",
              attackPoints: 5,
              message: "BONUS: it's a singing quartet! +5 hero attack!"
            })
          }
        }
      }
      //Vegetables
    } else if (hero.type === "Vegetable") {
      //vegetable enemy bonuses 
      if (enemy.name === "Paula Deen") {
        heroBonus.push({
          name: "ewveggies",
          attackPoints: 2,
          message: "BONUS: Paula Deen has no idea what to do with vegetables. -2 enemy health."
        })
      } else if (enemy.name === "Gordon Ramsay") {
        enemyBonus.push({
          name: "chopper",
          attackPoints: 3,
          message: "BONUS: Gordon Ramsay is GREAT at chopping. -3 hero health."
        })
      }//end of enemy bonus
      
      //potato weapon bonuses 
      if (hero.species === "Potato") {
        if (hero.weapon.weapon === "meatTenderizer") {
          heroBonus.push({
            name: "bunnyslipper",
            healthPoints: -1,
            message: "BONUS: Potato accidentally squishes one of his bunny slippers with his giant meat tenderizer. :( hero health -1. "
          })
        } else if (hero.weapon.weapon === "chineseTakeout" && enemy.species ===
          "guyFieri") {
          heroBonus.push({
            name: "superDumpling",
            attackPoints: +2,
            message: "BONUS: Dumplings are awfully distracting to Guy Fieri. +2 hero attack."
          })
        } else if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "breakfast",
            healthPoints: -1,
            message: "BONUS: Potato loves a good irish breakfast. Gets distracted by eating and gets blindsided. -1 hero health."
          })
        } else if (hero.weapon.weapon === "knife") {
          heroBonus.push({
            name: "lotsofeyes",
            attackPoints: 1,
            message: "BONUS: Potato has lots of eyes and therefore great knife-eye coordination. +1 hero attack. "
          })
          if (enemy.species === "gordonRamsay") {
            heroBonus.push({
              name: "outchopped",
              attackPoints: -2,
              message: "BONUS: Gordon Ramsay can totally out chop a measly potato. -2 hero attack points."
            })
          }
        }
      } else if (hero.species === "Tomato") {
        if (enemy.species === "GuyFieri") {
          heroBonus.push({
            name: "whatsatomato",
            healthPoints: 1,
            message: "BONUS: Guy's never seen a fresh tomato before! He's not sure what to do! -1 enemy attack."
          })
        }
        //tomato weapon bonuses
        if (hero.weapon.weapon === "meatTenderizer") {
          heroBonus.push({
            name: "hulksmash",
            attackPoints: 4,
            message: "BONUS: TOMATO SMASH! -4 enemy health."
          })
        } else if (hero.weapon.weapon === "fryingPan") {
          heroBonus.push({
            name: "tooheavy",
            healthPoints: -1,
            message: "BONUS: this frying pan is a little heavy for the tomato. -1 hero health."
          })
        } else if (hero.weapon.weapon === "knife") {
          heroBonus.push({
            name: "sharp",
            attackPoints: 1,
            message: "BONUS: tomatoes only tolerate the sharpest of knives. +1 hero attack. "
          })
        } else if (hero.weapon.weapon === "chineseTakeout") {
          heroBonus.push({
            name: "takeout",
            attackPoints: 1,
            message: "BONUS: it's practically spaghetti. -1 enemy Health."
          })
        }
      }
    }
    //Ramsay weapon bonuses
    if (enemy.name === "Gordon Ramsay") {
      if (hero.species === "Apple") {
        enemyBonus.push({
          name: "spiralize",
          attackPoints: 2,
          message: "BONUS: SPIRALIZE ATTACK! +2 enemy attack."
        })
      } else if (hero.species === "potato") {
        enemyBonus.push({
          name: "takeoutsalt",
          healthPoints: -1,
          message: "potato takes all the salt and flavor out of Gordon's dishes. -1 enemy health."
        })
      }
      if (enemy.weapon.weapon === "meatTenderizer") {
        enemyBonus.push({
          name: "verbalAbuse",
          attackPoints: -1,
          message: "BONUS: Gordon Ramsay uses his words to pummel his opponents so he's not too practiced with the meat tenderizer thing. -1 enemy attack points."
        })
      } else if (enemy.weapon.weapon === "chineseTakeout" && hero.species ===
        "Potato") {
        enemyBonus.push({
          name: "unusualingredient",
          attackPoints: 3,
          message: "BONUS: Potatos are a unique but delicious ingredient in potstickers. -3 hero health."
        })
      } else if (enemy.weapon.weapon === "knife" && hero.species ===
        "Tomato") {
        enemyBonus.push({
          name: "superdice",
          attackPoints: 1,
          message: "BONUS: Super Dicing Chef Skills. -1 hero health."
        })
      } else if (enemy.weapon.weapon === "fryingPan") {
        enemyBonus.push({
          name: "nofrying",
          healthPoints: -2,
          message: "BONUS: Frying is a low down cheating unhealthy way to cook. -2 enemy health."
        })
      }
      //paula weapon bonuses
    } else if (enemy.name === "Paula Deen") {
      if (enemy.species === "Lobster") {
        enemyBonus.push({
          name: "toofancy",
          healthPoints: -1,
          message: "BONUS: lobster is too fancy for down-home Paula Deen. -1 enemy health."
        })
      } else if (enemy.species === "Apple") {
        enemyBonus.push({
          name: "piemaking",
          healthPoints: 3,
          message: "Paula does love her apple pie. +3 enemy health."
        })
      } else if (enemy.species === "Peach") {
        enemyBonus.push({
          name: "cobbler",
          attackPoints: 2,
          message: "BONUS: Paula's peach cobbler is to die for. +2 enemy attack."
        })
      }
      if (enemy.weapon.weapon === "fryingPan") {
        enemyBonus.push({
          name: "sogood",
          healthPoints: 3,
          message: "BONUS: Paula thinks fried food is just the most delicious. +3 enemy health."
        })
      } else if (enemy.weapon.weapon === "knife" && hero.type ===
        "Vegetable") {
        enemyBonus.push({
          name: "whatsthis",
          attackPoints: -2,
          message: "BONUS: Paula doesn't know how to chop, she has lots of people to help her with that. -2 enemy attack."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer") {
        if (hero.species === "potato") {
          enemyBonus.push({
            name: "gotcha",
            attackPoints: 2,
            message: "BONUS: Paula's got a potato masher! Joke's on you, potato! +2 enemy attack."
          })
        } else if (hero.type === "meat") {
          enemyBonus.push({
            name: "ooops",
            attackPoints: -2,
            message: "BONUS: oops, Paula's got a potato masher, joke's on her, she can't attack you nearly as well! -2 enemy attack."
          })
        }
      } else if (enemy.weapon.weapon === "chineseTakeout") {
        enemyBonus.push({
          name: "delicious",
          healthPoints: 1,
          message: "BONUS: mmmmmmmmmmmmmm, fried dumplings. Enemy health +1."
        })
      }
      //guy weapon bonuses
    } else if (enemy.name === "Guy Fieri") {
      if (hero.species === "Potato") {
        enemyBonus.push({
          name: "frenchfries",
          healthPoints: 2,
          message: "BONUS: the most delicious divey food is made from potatoes. +2 enemy health."
        })
      } else if (hero.species === "Cow") {
        enemyBonus.push({
          name: "burgers",
          attackPoints: 1,
          message: "BONUS: Guy is gonna make hamburger out of you! +1 enemy attack."
        })
      } else if (hero.species === "Lobster") {
        enemyBonus.push({
          name: "fire",
          attackPoints: -1,
          message: "BONUS: guy doesn't have the subtlety to cook a lobster. -1 enemy attack."
        })
      }
      if (enemy.weapon.weapon === "fryingPan") {
        enemyBonus.push({
          name: "Imonfire",
          attackPoints: 2,
          message: "BONUS: This frying pan is on FIRE just like guy's shirt! enemy attack +2."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer" && hero.type ===
        "fruit") {
        enemyBonus.push({
          name: "smashhaha",
          healthPoints: 1,
          message: "BONUS: Guy thinks smashing fruit is the funniest thing. +1 enemy health."
        })
      } else if (enemy.weapon.weapon === "chineseTakeout") {
        enemyBonus.push({
          name: "Icantread",
          healthPoints: -1,
          message: "BONUS: Guy has trouble reading his fortune cookie. -1 enemy health."
        })
      } else if (enemy.weapon.weapon === "knife" && hero.species ===
        "Lobster") {
        enemyBonus.push({
          name: "seafoodSlap",
          attackPoints: 3,
          message: "BONUS: SEAFOOD SLAP!! you're screwed, lobster: +3 enemy attack points!"
        })
      }
      //lovett weapon bonuses
    } else if (enemy.name === "Mrs. Lovett") {
      if (hero.species === "Apple") {
        enemyBonus.push({
          name: "girltalk",
          healthPoints: 1,
          message: "BONUS: Girl talk... +1 enemy health."
        })
      } else if (hero.species === "Potato") {
        enemyBonus.push({
          name: "tastyfiller",
          attackPoints: 1,
          message: "BONUS: potatoes go great with person pies. +1 enemy attack."
        })
      }
      if (enemy.weapon.weapon === "knife") {
        enemyBonus.push({
          name: "usedtogrinder",
          healthPoints: -2,
          message: "BONUS: Mrs. Lovett greatly prefers a meat grinder. -2 enemy health."
        })
      } else if (enemy.weapon.weapon === "chineseTakeout") {
        enemyBonus.push({
          name: "likemyhair",
          healthPoints: 1,
          message: "BONUS: Chinese Takeout is curly and messy just like Mrs. Lovett's crazy hair. +1 enemy health."
        })
      } else if (enemy.weapon.weapon === "meatTenderizer" && hero.type ===
        "Meat") {
        enemyBonus.push({
          name: "niceandtender",
          attackPoints: 1,
          message: "BONUS: Mrs. Lovett knows her tender meats. +1 enemy attack. "
        })
      } else if (enemy.weapon.weapon === "fryingPan") {
        enemyBonus.push({
          name: "singalong",
          attackPoints: -1,
          message: "BONUS: Mrs. Lovett and her frying pan get distracted by singing to each other. -1 enemy attack."
        })
      }
    }
  }
  return bonus;
}(FoodFight || {}))
