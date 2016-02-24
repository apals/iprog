/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var DetailViewController = function (view, model) {

    var backbtn = $('#back-to-select-dish-btn');
    var theClickFunction = function () {

        $('#meals-view').css('display', 'block');
        $('#select-dish').css('display', 'block');

        $('#detail-view-container').css('display', 'none');

    };
    backbtn.click(theClickFunction);


};
