/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var PanelViewContoller = function(view, model ) {

    view.plusButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.click(function(){
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });
};
