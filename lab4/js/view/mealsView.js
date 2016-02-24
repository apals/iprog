var MealsView = function (container, model) {


  /*  console.log("I AM THE ONE CALLING");
    var availableMenus = model.getAllDishes("starter");
    var availableMenus2 = model.getAllDishes("main dish");
    var availableMenus3 = model.getAllDishes("dessert");
    availableMenus.push.apply(availableMenus, availableMenus2);
    availableMenus.push.apply(availableMenus, availableMenus3);
    availableMenus = model.getCurrentList();*/

    function setHtml(data) {

        if(!data || !data.Results) return;

        console.log("Setting mealsview data. Data is as follows: ");
        console.log(data);

        availableMenus = data.Results;

        container.empty();



        var row;
        for (var i = 0; i < availableMenus.length; i++) {

            if (i % 3 === 0) {
                row = $('<div>').addClass("row");
                container.append(row);
            }

            var id = availableMenus[i].id;

            var div = $('<div>').addClass("col-md-4").addClass("meal-container");
            var img = $('<img>').attr('src', availableMenus[i].ImageURL).attr('id', 'dish-in-view');


            div.attr("meal-id", availableMenus[i].RecipeID);
            div.append(img);
            div.append($('<p>').append(availableMenus[i].Title));
            div.append($('<p>').addClass("small-text").append(availableMenus[i].description));
            div.appendTo(row);

        }
    }

    model.addObserver(this);
    setHtml();

    this.update = function (data) {
        //container.empty();
        setHtml(data);
    };


};