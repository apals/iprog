/**
 * Created by apals on 21/02/16.
 */

/*

 <h2 class="left">My Dinner: 2 people</h2>
 <button class="right">Go back and edit dinner</button>
 */

//ExampleView Object constructor
var HeaderInfoView = function (container, model) {
    container.append($('<h2>').addClass("left").append(model.getPartyName() + ": " + model.getNumberOfGuests() + " people"));
    container.append($('<button>').addClass("right").append("Go back and edit dinner"));
};