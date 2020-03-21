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
    console.log(response);
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
    console.log(response);
  });
}

$(submitName).on("click", nameSearch);
$(submitIngredient).on("click", ingredientSearch);
