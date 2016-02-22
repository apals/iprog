/**
 * Created by apals on 21/02/16.
 */


var DetailView = function (container, model) {

    model.addObserver(this);

    var h2 = $('<h2>');
    var img = $('<img>');
    var p = $('<p>').addClass("small-text");

    container.append(h2);
    container.append(img);
    container.append(p);
    container.append($('<button>').attr("id", "back-to-select-dish-btn").append("Back to select dish"));

    function setHtml() {
        var meal = model.getDish(model.getCurrentId());
        h2.html(meal.name);
        img.attr("src", "images/" + meal.image);
        p.html(meal.description);
    }

    this.update = function () {
        setHtml();
    }

};