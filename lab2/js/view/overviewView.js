//ExampleView Object constructor
var OverviewView = function (container, model) {

    var menu = model.getFullMenu();
    //var partytitle = $('#partytitle').append("\"" + model.getPartyName() + "\" set for " + model.getNumberOfGuests() + " people");

    for (var i = 0; i <= menu.length - 1; i++) {
        $('.full-menu-wrapper').append("<div class=\"meal\"></div>");
        $('.meal:eq(' + i + ')').append('<img id="meal-image" src="images/' + menu[i].image + '" />').append("<p>" + menu[i].name + "</p>");
    }

    var lastThing = $('<div>').addClass("meal");
    lastThing.append("Total: <br>" + model.getTotalMenuPrice());
    $('.full-menu-wrapper').append(lastThing);

};