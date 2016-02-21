/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var PanelViewController = function(view, model ) {

    var value = $("#number-of-guests-input").val();
    $("#number-of-guests-input").on('keyup change click', function () {
        if(this.value !== value) {
            value = this.value;
            model.setNumberOfGuests(value);
            console.log("changed number of guests");

        }
    });

    var partyname = $("#name-of-party-input");
	partyname.change(function() {

		model.setPartyName(partyname.val());
		console.log("Name set to " + partyname.val());
	});
};
