$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    //And create the needed controllers and views
  //  var exampleView = new ExampleView($("#exampleView"));
    var newPartyView = new NewPartyView($("#newPartyView"));
    var ingredientsView = new IngredientsView($("#ingredientsView"));

    var overviewView = new OverviewView($("#overviewView"), model);
	var previousView = new PreviousView($("#previousparties"));

});