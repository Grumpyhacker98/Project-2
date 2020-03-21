var searchName = $("#search-name").val().trim();
var searchIngredient = $("#search-ingredient").val().trim();
var submitName = $("#submit-name");
var submitIngredient = $("#submit-ingredient");

function nameSearch() {
    event.preventDefault();
    nameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s' + searchName
    // nameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    console.log(searchName)
    $.ajax({
        url: nameUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    console.log("searched")
}

function ingredientSearch(){
    event.preventDefault();
    ingredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchIngredient
    console.log(searchIngredient)
    $.ajax({
        url: ingredientUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    console.log("searched")
}


$(submitName).on("click", nameSearch);
$(submitIngredient).on("click", ingredientSearch)