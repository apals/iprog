/**
 * Created by apals on 21/02/16.
 */

//ExampleView Object constructor
var HeaderInfoView = function (container, model) {

	model.addObserver(this);

	var h2 = $('<h2>').addClass("left").append(model.getPartyName() + ": " + model.getNumberOfGuests() + " people");

	container.append(h2);
	container.append($('<button>').addClass("right").attr("id", "edit-dinner-btn").append("Go back and edit dinner"))

	function setHtml() {
		h2.html("\"" + model.getPartyName() + "\" set for " + model.getNumberOfGuests() + " people");
	}
    
    this.update = function() {
    	setHtml();
    }
};