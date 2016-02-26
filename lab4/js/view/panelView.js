/**
 * Created by apals on 12/02/16.
 */


var PanelView = function (container, model) {

    model.addObserver(this);


    container.append($("<h3>").attr("id", "paneltitle"));
    container.append($("<hr>"));
    container.append($("<h5>").append("Name of party"));
    container.append($('<input>').attr("type", "text").attr("id", "name-of-party-input").attr("placeholder", "Party name"));
    container.append($("<hr>"));
    container.append($("<h5>").append("Number of guests"));
    container.append($('<input>').attr("type", "number").attr("id", "number-of-guests-input").attr("placeholder", "Guests").attr("value", "1").attr("min", "1"));
    container.append($("<hr>"));
    container.append($("<h4>").append("Dish Name - Cost"));
    container.append($("<div>").attr("id", "dish-and-cost"));


    var partytitle = $('#paneltitle');

    setHtml();

    function setHtml(data) {

        $("#dish-and-cost").empty();
        var menu = model.getFullMenu();
        partytitle.html(model.getPartyName()); // + "\" set for " + model.getNumberOfGuests() + " people");


        for (var i = menu.length - 1; i >= 0; i--) {
            var dishprice = 0;
            for(var j = 0; j < menu[i].Ingredients.length; j++) {
                dishprice += Number(menu[i].Ingredients[j].DisplayQuantity.split(" ")[0].trim().split("/")[0].trim()) * model.getNumberOfGuests();
            }
            $("#dish-and-cost").append(menu[i].Title + " - " + dishprice + " kr").append("<br>");
        }

        $("#dish-and-cost").append("<br><br>Total menu cost: " + model.getTotalMenuPrice() * model.getNumberOfGuests() + "kr.");
    }

    this.update = function (data) {
        setHtml(data);
    };
    container.append($("<hr>"));
    container.append($("<button>").attr("id", "confirm-dinner-btn").append("Confirm Dinner"));

};