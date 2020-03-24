var submitName = $("#submit-name");
var submitIngredient = $("#submit-ingredient");

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
  }).then(function(response) {
    var drink = response.drinks;

    for (var i = 0; i < drink.length; i++) {
      newDrink = $("<div>");

      // newUrl = $("<img>");
      // newUrl.addClass("gif")
      // newUrl.attr("src", info[i].images.fixed_height_still.url);

      newText = $("<p>");
      newText.text("Name: " + drink[i].strDrink);

      $(newDrink).append(newText);

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
  }).then(function(response) {
    var drink = response.drinks;

    for (var i = 0; i < drink.length; i++) {
      newDrink = $("<div>");

      // newUrl = $("<img>");
      // newUrl.addClass("gif")
      // newUrl.attr("src", info[i].images.fixed_height_still.url);

      newText = $("<p>");
      newText.text("Name: " + drink[i].strDrink);

      $(newDrink).append(newText);

      $("#search-display").append(newDrink);
    }
  });
}

$(submitName).on("click", nameSearch);
$(submitIngredient).on("click", ingredientSearch);
