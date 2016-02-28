/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var MealsViewController = function (view, model) {

    //var meal = $('.meal-container');
    $('#meals-view').on('click', 'img', function () {

        $("#meals-view").css('display', 'none');
        $('#select-dish').css('display', 'none');
        $('#detail-view-container').css('display', 'block');


        var num = $(this).parent().attr("meal-id");
        model.setCurrentId(num);

        if (num) {
            $("#detail-view-container").prepend("<span style='width: 100%; text-align: center' id='yeah'>Loading</span>");
            $("#loading").html("Loading");
            model.getDish(num);
            console.log("Mealsviewcontrooller, get dish" + num);
        }
    });
};
