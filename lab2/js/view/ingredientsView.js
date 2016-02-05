//ExampleView Object constructor
var IngredientsView = function (container) {

    var availableIngredients = ["Salmon (100g)", "Chicken (200g)", "Ruccola (1000g)"];


    var ingredientsForm = container.find("#ingredients-form");

    for (var i = 0; i < availableIngredients.length; i++) {
        ingredientsForm.append(
            $('<div>').addClass("checkbox").append(
                $('<label>').append("<input type=\"checkbox\" value=\"\">" + availableIngredients[i])
            ));
    }



};