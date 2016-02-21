/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var MealsViewController = function (view, model) {

    var meal = $('.meal-container');
    meal.click(function () {

        $("#meals-view").css('display', 'none');
        $('#select-dish').css('display', 'none');
        $('#detail-view-container').css('display', 'block');

        model.setCurrentId($(this).attr("meal-id"));

    });
};
