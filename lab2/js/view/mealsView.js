
var MealsView = function (container, model) {

    var availableMenus = model.getFullMenu();


    for (var i = 0; i < availableMenus.length; i++) {
        var div = $('<div>');
        div.append($('<img>').attr('src', 'images/' + availableMenus[i].image +'').attr('id', 'dish-in-view'));
        div.append($('<p>').append(availableMenus[i].name));
        container.append(div);
    }

};