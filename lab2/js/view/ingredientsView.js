//ExampleView Object constructor
var IngredientsView = function (container) {

    container.prepend($('<h2>').append("Ingredients"));
    var availableIngredients = ["Salmon (100g)", "Chicken (200g)", "Ruccola (1000g)"];
    var ingredlist = container.find("#ingred-list");

    for (var i = 0; i < availableIngredients.length; i++) {
        ingredlist.append(
            $('<ul>').append(availableIngredients[i]));
    }

};