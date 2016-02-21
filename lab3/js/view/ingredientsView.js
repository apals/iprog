//ExampleView Object constructor
var IngredientsView = function (container, model) {


    model.addObserver(this);

    var h2 = $('<h2>').append("Ingredients for " + model.getNumberOfGuests() + " people");
    container.prepend(h2);
    var table = $('<table>').attr("id", "ingredients-table");
    container.append(table);


    var lastSpan = $('<span>').append(model.getTotalMenuPrice()).addClass("right");
    setHtml();


    function setHtml() {
        console.log(model.getCurrentId());
        var meal = model.getDish(model.getCurrentId());
        var numberOfGuests = model.getNumberOfGuests();

        h2.html("Ingredients for " + numberOfGuests + " people");


        table.empty();
//        console.log(meal);

        meal.ingredients.forEach(function (ingredient) {
            var row = $('<tr>');
            row.append($('<td>').append(ingredient.quantity * numberOfGuests));
            row.append($('<td>').append(ingredient.unit));
            row.append($('<td>').append(ingredient.name));
            row.append($('<td>').append(ingredient.price * numberOfGuests));
            table.append(row);
        });
        console.log("dish price: " + model.getDishPrice(model.getCurrentId()));
        lastSpan.html(model.getDishPrice(model.getCurrentId()) * numberOfGuests);


    }

    container.append($('<hr>'));
    var button = $('<button>').append("Confirm").attr("id", "confirm-dish-btn");
    container.append(button);
    container.append(lastSpan);


    this.update = function () {
        setHtml();
    }
};