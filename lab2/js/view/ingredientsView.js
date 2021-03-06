//ExampleView Object constructor
var IngredientsView = function (container, model) {

    var menu = model.getFullMenu();

    container.prepend($('<h2>').append("Ingredients for " + model.getNumberOfGuests() + " people"));

    var table = $('<table>').attr("id", "ingredients-table");
    container.append(table);


    menu.forEach(function (meal) {

        meal.ingredients.forEach(function (ingredient) {
            var row = $('<tr>');
            row.append($('<td>').append(ingredient.quantity));
            row.append($('<td>').append(ingredient.unit));
            row.append($('<td>').append(ingredient.name));
            row.append($('<td>').append(ingredient.price));
            table.append(row);
        });

    });

    container.append($('<hr>'));
    container.append($('<button>').append("Confirm").addClass("left"));
    container.append($('<span>').append(model.getTotalMenuPrice()).addClass("right"));
};