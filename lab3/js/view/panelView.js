/**
 * Created by apals on 12/02/16.
 */


var PanelView = function (container, model) {

    model.addObserver(this);


    container.append($("<h6>").attr("id", "paneltitle"));
    container.append($('<input>').attr("type", "number").attr("id", "number-of-guests-input").attr("placeholder", "Guests").attr("value", "0"));
    container.append($("<hr>"));
    container.append($("<h4>").append("Dish Name - Cost"));
    container.append($("<div>").attr("id", "dish-and-cost"));


    var partytitle = $('#paneltitle');

    setHtml();

    function setHtml() {
        $("#dish-and-cost").empty();
        var menu = model.getFullMenu();
        partytitle.html(model.getPartyName()); // + "\" set for " + model.getNumberOfGuests() + " people");


        for (var i = menu.length - 1; i >= 0; i--) {
            $("#dish-and-cost").append(menu[i].name + " - " + model.getDishPrice(menu[i].id) + " kr").append("<br>");
        }

        $("#dish-and-cost").append("<br><br>Total menu cost: " + model.getTotalMenuPrice() + "kr.");
    }

    this.update = function() {
        setHtml();
    };
    container.append($("<hr>"));
    container.append($("<button>").append("Confirm Dinner"));

};