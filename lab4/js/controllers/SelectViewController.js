/**
 * Created by mheine on 21/02/16.
 */
//IngredientsViewController Object constructor
var SelectViewController = function (view, model) {

    var searchbar = $("#searchfield");
    searchbar.change(function () {


        $("#meals-view").empty();
        $("#meals-view").append("Loading");
        model.setCurrentSearch(searchbar.val(), $('#types').find("option:selected").val());
    });


    $('#types').change(function () {
        /*var optionSelected = $(this).find("option:selected");

        //model.setType(optionSelected.val());
        model.getAllDishes(optionSelected.val());*/

        $("#meals-view").empty();
        $("#meals-view").append("Loading");
        model.setCurrentSearch($("#searchfield").val(), $('#types').find("option:selected").val());
    });

};
