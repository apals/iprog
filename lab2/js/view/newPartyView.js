//ExampleView Object constructor
var NewPartyView = function (container) {

    var availableMenus = ["Salmon", "Chicken", "Other Menu"];

    var menuItems = container.find("#menu-items");

    for (var i = 0; i < availableMenus.length; i++) {
        menuItems.append(
            $('<li>').append(
                $('<a>').attr('href', '#').append(availableMenus[i])
            ));
    }

};