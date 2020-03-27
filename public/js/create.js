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
    alchaholic: $("#create-alchaholic")
      .val()
      .trim(),
    category: $("#create-category")
      .val()
      .trim(),
    glass: $("#create-glass")
      .val()
      .trim(),
    ing1: $("#create-ingredient1")
      .val()
      .trim(),
    ingVol1: $("#create-ingredientVol1")
      .val()
      .trim(),
    ing2: $("#create-ingredient2")
      .val()
      .trim(),
    ingVol2: $("#create-ingredientVol2")
      .val()
      .trim(),
    ing3: $("#create-ingredient3")
      .val()
      .trim(),
    ingVol3: $("#create-ingredientVol3")
      .val()
      .trim(),
    ing4: $("#create-ingredient4")
      .val()
      .trim(),
    ingVol4: $("#create-ingredientVol4")
      .val()
      .trim(),
    ing5: $("#create-ingredient5")
      .val()
      .trim(),
    ingVol5: $("#create-ingredientVol5")
      .val()
      .trim(),
    ing6: $("#create-ingredient6")
      .val()
      .trim(),
    ingVol6: $("#create-ingredientVol6")
      .val()
      .trim(),
    ing7: $("#create-ingredient7")
      .val()
      .trim(),
    ingVol7: $("#create-ingredientVol7")
      .val()
      .trim(),
    ing8: $("#create-ingredient8")
      .val()
      .trim(),
    ingVol8: $("#create-ingredientVol8")
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
