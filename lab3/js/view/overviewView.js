//ExampleView Object constructor
var OverviewView = function (container, model) {

    model.addObserver(this);

    var button = $('<button>').append("Print full recipe").attr('id', 'print-recipe-btn');
    var menuwrapper = $('#full-menu-wrapper');

    var lastThing = $('<div>').addClass("meal");
    container.append(lastThing);

    function setHtml() {
        var menu = model.getFullMenu();
        //var partytitle = $('#partytitle').append("\"" + model.getPartyName() + "\" set for " + model.getNumberOfGuests() + " people");


        for (var i = 0; i <= menu.length - 1; i++) {
            var div = $('<div>').addClass("meal");
            var img = $('<img>').attr('id', 'meal-image').attr('src', 'images/' + menu[i].image);
            var p = $('<p>').append(menu[i].name);
            div.append(img).append(p);
            menuwrapper.append(div);
        }
        lastThing.html("Total: <br>" + model.getTotalMenuPrice() * model.getNumberOfGuests() + " SEK");

    }

    container.append($('<hr>'));
    container.append($('<div>').addClass("align-center").append(button));

    this.update = function () {
        $('#full-menu-wrapper').empty();
        setHtml();
    };

};

