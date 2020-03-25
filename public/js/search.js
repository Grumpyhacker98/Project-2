var submitName = $("#submit-name");
var submitIngredient = $("#submit-ingredient");
var submitId = $("#submit-ID");

function nameSearch() {
  event.preventDefault();

  var searchName = $("#search-name")
    .val()
    .trim();

  nameUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchName;

  $.ajax({
    url: nameUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var drink = response.drinks;
    $("#search-display").html("");

    if (drink === null) {
      $("#search-display").html("failed search, try another!");
    }

    for (var i = 1; i < drink.length; i++) {
      newDrink = $("<div>");

      // newUrl = $("<img>");
      // newUrl.addClass("gif")
      // newUrl.attr("src", info[i].images.fixed_height_still.url);

      // print name
      newText = $("<p>");
      newText.text("Name: " + drink[i].strDrink + "  ID: " + drink[i].idDrink);
      $(newDrink).append(newText);

      // these 2 arrays are for searching through the ingredients lists to print data
      // i didnt know how to grab strIngredient1 then strIngredient2 in a for loop sort of manner
      ingredient = [
        drink[i].strIngredient1,
        drink[i].strIngredient2,
        drink[i].strIngredient3,
        drink[i].strIngredient4,
        drink[i].strIngredient5,
        drink[i].strIngredient6,
        drink[i].strIngredient7,
        drink[i].strIngredient8
      ];

      volume = [
        drink[i].strMeasure1,
        drink[i].strMeasure2,
        drink[i].strMeasure3,
        drink[i].strMeasure4,
        drink[i].strMeasure5,
        drink[i].strMeasure6,
        drink[i].strMeasure7,
        drink[i].strMeasure8
      ];

      // no greater than 8 for MYSQL
      for (var t = 0; t < 8; t++) {
        // it needs to cancel when the ingredients retun null
        if (ingredient[t] === null) {
          break;
        }

        // print ingredients
        newIngredient = $("<p>");
        newIngredient.text("ingredient: " + ingredient[t] + " " + volume[t]);

        $(newDrink).append(newIngredient);
      }

      newBreak = $("<br>")
      $(newDrink).append(newBreak);

      $("#search-display").append(newDrink);
    }
  });
}

function ingredientSearch() {
  event.preventDefault();

  var searchIngredient = $("#search-ingredient")
    .val()
    .trim();

  ingredientUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    searchIngredient;

  $.ajax({
    url: ingredientUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var drink = response.drinks;
    $("#search-display").html("");

    if (drink === null) {
      $("#search-display").html("failed search, try another!");
    }

    for (var i = 0; i < drink.length; i++) {
      newDrink = $("<div>");

      // newUrl = $("<img>");
      // newUrl.addClass("gif")
      // newUrl.attr("src", info[i].images.fixed_height_still.url);

      newText = $("<p>");
      newText.text("Name: " + drink[i].strDrink + "  ID: " + drink[i].idDrink);

      $(newDrink).append(newText);

      $("#search-display").append(newDrink);
    }
  });
}

function IdSearch() {
  event.preventDefault();

  var searchId = $("#search-ID")
    .val()
    .trim();

  IDUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + searchId;

  $.ajax({
    url: IDUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var drink = response.drinks;
    $("#search-display").html("");

    if (drink === null) {
      $("#search-display").html("failed search, try another!");
    }

    newDrink = $("<div>");

    // print name
    newText = $("<p>");
    newText.text("Name: " + drink[0].strDrink + "  ID: " + drink[0].idDrink);
    $(newDrink).append(newText);

    // these 2 arrays are for searching through the ingredients lists to print data
    // i didnt know how to grab strIngredient1 then strIngredient2 in a for loop sort of manner
    ingredient = [
      drink[0].strIngredient1,
      drink[0].strIngredient2,
      drink[0].strIngredient3,
      drink[0].strIngredient4,
      drink[0].strIngredient5,
      drink[0].strIngredient6,
      drink[0].strIngredient7,
      drink[0].strIngredient8
    ];

    volume = [
      drink[0].strMeasure1,
      drink[0].strMeasure2,
      drink[0].strMeasure3,
      drink[0].strMeasure4,
      drink[0].strMeasure5,
      drink[0].strMeasure6,
      drink[0].strMeasure7,
      drink[0].strMeasure8
    ];

    // no greater than 8 for MYSQL
    for (var t = 0; t < 8; t++) {
      // it needs to cancel when the ingredients retun null
      if (ingredient[t] === null) {
        break;
      }

      // print ingredients
      newIngredient = $("<p>");
      newIngredient.text("ingredient: " + ingredient[t] + " " + volume[t]);

      $(newDrink).append(newIngredient);
    }

    $("#search-display").append(newDrink)

  });
}

$(submitName).on("click", nameSearch);
$(submitIngredient).on("click", ingredientSearch);
$(submitId).on("click", IdSearch);
