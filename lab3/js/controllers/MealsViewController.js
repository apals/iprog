/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var MealsViewController = function (view, model) {

    //var meal = $('.meal-container');
    $('#meals-view').on('click', 'img', function() {

        $("#meals-view").css('display', 'none');
        $('#select-dish').css('display', 'none');
        $('#detail-view-container').css('display', 'block');

        var num = $(this).parent().attr("meal-id");
        model.setCurrentId(num);
    });
};
