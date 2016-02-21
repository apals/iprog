/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var MealsViewController = function (view, model) {

    console.log("Meals view controlelr");
    var meal = $('.meal-container');
    meal.click(function () {
        console.log($('.meal-container'));


        $("#meals-view").css('display', 'none');
        $('#select-dish').css('display', 'none');


        /*$('#detail-view').addClass("active-inline-block");
         $('#ingredientsView').addClass("active-inline-block");
         $('#preparationsView').addClass("active-inline-block");*/
        $('#detail-view-container').css('display', 'block');
        model.setCurrentId($(this).attr("meal-id"));

    });
};
