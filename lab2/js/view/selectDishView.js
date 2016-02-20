/**
 * Created by apals on 12/02/16.
 * Modified by mheine a few days later
 */

 var SelectDishView = function (container, model) {

    var menu = model.getFullMenu();
    var partytitle = $('#paneltitle').append("\"" + model.getPartyName() + "\" set for " + model.getNumberOfGuests() + " people");

    for (var i = menu.length - 1; i >= 0; i--) {
    	$("#dish-and-cost").append(menu[i].name + " - " + model.getDishPrice(menu[i].id) + " kr").append("<br>");
    };
    $("#dish-and-cost").append("<br><br>Total menu cost: " + model.getTotalMenuPrice() + "kr.")

};