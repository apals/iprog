/**
 * Created by apals on 21/02/16.
 */


var DetailView = function (container, model) {

    model.addObserver(this);

    var h2 = $('<h2>');
    var img = $('<img>');
    var p = $('<p>').addClass("small-text");

    container.append($('<button>').attr("id", "back-to-select-dish-btn").append("Back to 'Select dish'"));
    container.append(h2);
    container.append(img);
    container.append(p);
   

    function setHtml(data) {
        if(data && data.error) {
            container.prepend("Error when getting meals");
        }
        if(!data || !data.RecipeID) return;

        var meal = data;

        h2.html(meal.name);
        img.attr("src", meal.ImageURL);
        p.html(meal.Description);
    }

    this.update = function (data) {
        setHtml(data);
    }

};