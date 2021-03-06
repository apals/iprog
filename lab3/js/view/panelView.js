/**
 * Created by apals on 12/02/16.
 */


var PanelView = function (container, model) {

    model.addObserver(this);


    container.append($("<h3>").attr("id", "paneltitle"));
    container.append($("<hr>"));
    container.append($("<h5>").append("Name of party"))
    container.append($('<input>').attr("type", "text").attr("id", "name-of-party-input").attr("placeholder", "Party name"));
    container.append($("<hr>"));
    container.append($("<h5>").append("Number of guests"))
    container.append($('<input>').attr("type", "number").attr("id", "number-of-guests-input").attr("placeholder", "Guests").attr("value", "1").attr("min", "1"));
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
            var dishdiv = $("<div>").attr("id", "dish-div");
            dishdiv.append(menu[i].name + " - " + model.getDishPrice(menu[i].id) * model.getNumberOfGuests() + " kr");

            var btndiv = $("<div>").attr("id", "btn-div");
            btndiv.append($('<button>').attr("id", "delete-dish-btn").append(" X ").attr("value", menu[i].id));
            $("#dish-and-cost").append(dishdiv)
            $("#dish-and-cost").append(btndiv)
            $("#dish-and-cost").append("<br><br>");
        }

        $("#dish-and-cost").append("<br><br>Total menu cost: " + model.getTotalMenuPrice() * model.getNumberOfGuests() + "kr.");
    }

    this.update = function() {
        setHtml();
    };
    container.append($("<hr>"));
    container.append($("<button>").attr("id", "confirm-dinner-btn").append("Confirm Dinner"));

};