//ExampleView Object constructor
var IngredientsView = function (container, model) {


    model.addObserver(this);

    var h2 = $('<h2>').append("Ingredients for " + model.getNumberOfGuests() + " people");
    container.prepend(h2);
    var table = $('<table>').attr("id", "ingredients-table");
    container.append(table);


    var lastSpan = $('<span>').append(model.getTotalMenuPrice()).addClass("right");
    setHtml();


    function setHtml(data) {
        if(!data || !data.RecipeID) return;



        var meal = data;
        var numberOfGuests = model.getNumberOfGuests();



        h2.html("Ingredients for " + numberOfGuests + " people");


        table.empty();


        meal.Ingredients.forEach(function (ingredient) {
            var row = $('<tr>');
            row.append($('<td>').append(ingredient.DisplayQuantity * numberOfGuests));
            row.append($('<td>').append(ingredient.MetricUnit));
            row.append($('<td>').append(ingredient.Name));
            row.append($('<td>').append(1 * numberOfGuests));
            table.append(row);
        });
        lastSpan.html(model.getDishPrice(model.getCurrentId()) * numberOfGuests);


    }

    container.append($('<hr>'));
    var button = $('<button>').append("Confirm").attr("id", "confirm-dish-btn");
    container.append(button);
    container.append(lastSpan);


    this.update = function (data) {
        setHtml(data);
    }
};