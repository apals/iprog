var MealsView = function (container, model) {


    function setHtml() {
        var availableMenus = model.getAllDishes("starter");
        var availableMenus2 = model.getAllDishes("main dish");
        var availableMenus3 = model.getAllDishes("dessert");


        availableMenus.push.apply(availableMenus, availableMenus2);
        availableMenus.push.apply(availableMenus, availableMenus3);


        var row;
        for (var i = 0; i < availableMenus.length; i++) {

            if (i % 3 === 0) {
                row = $('<div>').addClass("row");
                container.append(row);
            }
            var id = availableMenus[i].id;

            var div = $('<div>').addClass("col-md-4").addClass("meal-container");
            var img = $('<img>').attr('src', 'images/' + availableMenus[i].image + '').attr('id', 'dish-in-view');


            div.attr("meal-id", id);
            div.append(img);
            div.append($('<p>').append(availableMenus[i].name));
            div.append($('<p>').addClass("small-text").append(availableMenus[i].description));
            div.appendTo(row);


/*            div.click(function () {

                $("#meals-view").css('display', 'none');
                $('#select-dish').css('display', 'none');
                $('#detail-view-container').css('display', 'block');

                model.setCurrentId($(this).attr("meal-id"));

            });*/
        }
    }

    model.addObserver(this);
    setHtml();

    this.update = function () {
        container.empty();
        setHtml();
    };


};