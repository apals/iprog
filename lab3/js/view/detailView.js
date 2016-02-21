
/**
 * Created by apals on 21/02/16.
 */


var DetailView = function (container, model) {

    var meal = model.getFullMenu()[0];
    var h2 = $('<h2>').append(meal.name);
    var img = $('<img>').attr("src", "images/" + meal.image);
    var p = $('<p>').addClass("small-text").append(meal.description);


    container.append(h2);
    container.append(img);
    container.append(p);

};