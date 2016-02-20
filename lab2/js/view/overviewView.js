//ExampleView Object constructor
var OverviewView = function (container, model) {

    var menu = model.getFullMenu();
    var partytitle = $('#partytitle').append("\"" + model.getPartyName() + "\" set for " + model.getNumberOfGuests() + " people");

    for (var i = 0; i <= menu.length -1 ; i++) {
        $('.full-menu-wrapper').append("<div class=\"meal\"></div>");
        $('.meal:eq(' + i + ')').append('<img id="meal-image" src="images/' + menu[i].image + '" />').append( "<p>" + menu[i].name + "</p>" );
    };


/*    var availableMenus = ["Salmon", "Chicken", "Other Menu"];

    var overview = container.find("#hej");

    model.addDishToMenu(1);
    model.addDishToMenu(100);
    model.addDishToMenu(200);
    model.setNumberOfGuests(6);


    var overviewList = overview.append('<ul>');
    overviewList.append('<li>Party created for ' + model.getNumberOfGuests() + ' guests</li>');


    var str = '<li>The menu is the following<ul>';
    for (var i = 0; i < model.getFullMenu().length; i++) {
        str += '<li>' + model.getFullMenu()[i].name + '</li>';
    }
    str += '</ul>';


    overviewList.append(str);

    overviewList.append('<li> The recipe can be found here </li>');
    overviewList.append('<li> The ingredients can be found here');
    overviewList.append('<li> The total cost is $' + model.getTotalMenuPrice() + '</li>');*/

};