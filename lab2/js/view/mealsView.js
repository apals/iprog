
var MealsView = function (container) {

    var availableMenus = ["Salmon", "Chicken", "Other Menu"];

    for (var i = 0; i < availableMenus.length; i++) {
        var div = $('<div>');
        div.append($('<img>').attr('src', 'images/meatballs.jpg'));
        div.append($('<p>').append("Texting"));
        container.append(div);
    }

};