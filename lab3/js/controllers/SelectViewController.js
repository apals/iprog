/**
 * Created by mheine on 21/02/16.
 */
//IngredientsViewController Object constructor
var SelectViewController = function (view, model) {

    var searchbar = $("#searchfield");
    searchbar.change(function () {

        model.setCurrentSearch(searchbar.val());
    });


    $('#types').change(function () {
        var optionSelected = $(this).find("option:selected");

        model.setType(optionSelected.val());
    });

};
