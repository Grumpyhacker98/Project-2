// connected to the create.handlebars, needs to collect all of the variables from the page and update the MYSQL with it

// it may need to be connected to the index.js to use the API.create functions
// copied straight from file

var createDrink = $("#submit-mixedDrink");

function MIX() {
  event.preventDefault();

  drink = {
    name: $("#create-name")
      .val()
      .trim(),
    alcoholic: $("#create-alchaholic")
      .val()
      .trim(),
    category: $("#create-category")
      .val()
      .trim(),
    glass: $("#create-glass")
      .val()
      .trim(),
    Ing1: $("#create-ingredient1")
      .val()
      .trim(),
    Ing1Vol: $("#create-ingredientVol1")
      .val()
      .trim(),
    Ing2: $("#create-ingredient2")
      .val()
      .trim(),
    Ing2Vol: $("#create-ingredientVol2")
      .val()
      .trim(),
    Ing3: $("#create-ingredient3")
      .val()
      .trim(),
    Ing3Vol: $("#create-ingredientVol3")
      .val()
      .trim(),
    Ing4: $("#create-ingredient4")
      .val()
      .trim(),
    Ing4Vol: $("#create-ingredientVol4")
      .val()
      .trim(),
    Ing5: $("#create-ingredient5")
      .val()
      .trim(),
    Ing5Vol: $("#create-ingredientVol5")
      .val()
      .trim(),
    Ing6: $("#create-ingredient6")
      .val()
      .trim(),
    Ing6Vol: $("#create-ingredientVol6")
      .val()
      .trim(),
    Ing7: $("#create-ingredient7")
      .val()
      .trim(),
    Ing7Vol: $("#create-ingredientVol7")
      .val()
      .trim(),
    Ing8: $("#create-ingredient8")
      .val()
      .trim(),
    Ing8Vol: $("#create-ingredientVol8")
      .val()
      .trim()
  };

  console.log(drink);

  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/mixed",
    data: JSON.stringify(drink)
  });
}

$(createDrink).on("click", MIX);
