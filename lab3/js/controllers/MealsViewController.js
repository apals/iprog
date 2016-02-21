/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var MealsViewController = function (view, model) {

    var meal = $('.meal-container');
    meal.click(function () {

        $('#meals-view').addClass("inactive");
        $('#select-dish').addClass("inactive");

        /*$('#detail-view').addClass("active-inline-block");
         $('#ingredientsView').addClass("active-inline-block");
         $('#preparationsView').addClass("active-inline-block");*/
        $('#detail-view-container').addClass("active-block");
        model.setCurrentId($(this).attr("meal-id"));

    });
};
