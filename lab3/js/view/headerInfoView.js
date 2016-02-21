/**
 * Created by apals on 21/02/16.
 */

//ExampleView Object constructor
var HeaderInfoView = function (container, model) {

	model.addObserver(this);
	setHtml();

	function setHtml() {
		container.append($('<h2>').addClass("left").append(model.getPartyName() + ": " + model.getNumberOfGuests() + " people"));
    	container.append($('<button>').addClass("right").append("Go back and edit dinner"))
	}
    
    this.update = function() {
    	container.empty();
    	setHtml();
    }
};