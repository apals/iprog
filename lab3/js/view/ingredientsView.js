//ExampleView Object constructor
var IngredientsView = function (container, model) {


    model.addObserver(this);


    function setHtml() {
        var meal = model.getDish(model.getCurrentId());
        var numberOfGuests = model.getNumberOfGuests();
        container.prepend($('<h2>').append("Ingredients for " + numberOfGuests + " people"));

        var table = $('<table>').attr("id", "ingredients-table");
        container.append(table);


        meal.ingredients.forEach(function (ingredient) {
            var row = $('<tr>');
            row.append($('<td>').append(ingredient.quantity * numberOfGuests));
            row.append($('<td>').append(ingredient.unit));
            row.append($('<td>').append(ingredient.name));
            row.append($('<td>').append(ingredient.price * numberOfGuests));
            table.append(row);
        });


        container.append($('<hr>'));
        container.append($('<button>').append("Confirm").addClass("left"));
        container.append($('<span>').append(model.getTotalMenuPrice()).addClass("right"));
    }


    this.update = function () {
        container.empty();
        setHtml();
    }
};