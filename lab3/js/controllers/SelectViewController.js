/**
 * Created by mheine on 21/02/16.
 */
//IngredientsViewController Object constructor
var SelectViewController = function(view, model ) {

	$("#searchfield").change(function() {

		model.setCurrentSearch(searchbar.value);
		console.log("You searched for  " + searchbar.value);
	});

	

};
