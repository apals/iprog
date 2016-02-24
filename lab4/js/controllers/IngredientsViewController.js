/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var IngredientsViewController = function (view, model) {

    var backbtn = $('#confirm-dish-btn');
    var theClickFunction = function () {
        model.addDishToMenu(model.getCurrentId());
    };
    backbtn.click(theClickFunction);

};
