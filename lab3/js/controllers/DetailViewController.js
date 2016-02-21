/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var DetailViewController = function (view, model) {

    var backbtn = $('#back-to-select-dish-btn');
    var theClickFunction = function () {

        $('#meals-view').css('display', 'block');
        $('#select-dish').css('display', 'block');

        /*$('#detail-view').addClass("active-inline-block");
         $('#ingredientsView').addClass("active-inline-block");
         $('#preparationsView').addClass("active-inline-block");*/
        $('#detail-view-container').css('display', 'none');


        setMealClickListener();
    };
    backbtn.click(theClickFunction);

    /**
     * The display none event removes the click listener on the meals.. this fixes it
     */
    function setMealClickListener() {

        var meal = $('.meal-container');
        meal.click(function () {
            $("#meals-view").css('display', 'none');
            $('#select-dish').css('display', 'none');


            /*$('#detail-view').addClass("active-inline-block");
             $('#ingredientsView').addClass("active-inline-block");
             $('#preparationsView').addClass("active-inline-block");*/
            $('#detail-view-container').css('display', 'block');
            model.setCurrentId($(this).attr("meal-id"));

        });

    }
};
