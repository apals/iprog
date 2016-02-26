//ExampleView Object constructor
var IngredientsView = function (container, model) {


    model.addObserver(this);

    var h2 = $('<h2>').append("Ingredients for " + model.getNumberOfGuests() + " people");
    container.prepend(h2);
    var table = $('<table>').attr("id", "ingredients-table");
    container.append(table);


    var lastSpan = $('<div id="lastspan" style="width: 100px; height: 100px">').html("Total price: " + model.getTotalMenuPrice()); //.addClass("right");
    setHtml();
    var meal;

    var displayquantity;

    function setHtml(data) {
        console.log(data);
        if(!data) return;
        if(!data.RecipeID && !data.newGuests) return;
        if(data.RecipeID) meal = data;

        var numberOfGuests = model.getNumberOfGuests();

        table.empty();
        if (data.newGuests) {
            numberOfGuests = data.newGuests;
            h2.html("Ingredients for " + data.newGuests + " people");
        }


        if(!meal) return;

        var totprice = 0;
        meal.Ingredients.forEach(function (ingredient) {
            var row = $('<tr>');
            row.append($('<td>').attr('id', 'quantity').append(ingredient.DisplayQuantity * numberOfGuests));
            row.append($('<td>').append(ingredient.MetricUnit));
            row.append($('<td>').append(ingredient.Name));
            row.append($('<td>').attr('id', 'price').append(ingredient.DisplayQuantity * numberOfGuests));
            var dispQuantity = Number(ingredient.DisplayQuantity.split(" ")[0].trim().split("/")[0].trim());

            console.log(dispQuantity);
            var ingprice = Number(dispQuantity) * Number(numberOfGuests);
            console.log(ingprice);
            totprice += ingprice;
            table.append(row);
        });
        lastSpan.html("Total price: " + totprice);
    }

    container.append($('<hr>'));
    var button = $('<button>').append("Add dish to menu").attr("id", "confirm-dish-btn");
    container.prepend(button);
    container.append(lastSpan);


    this.update = function (data) {
        setHtml(data);
    }
};