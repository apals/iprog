$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    //And create the needed controllers and views
  //  var exampleView = new ExampleView($("#exampleView"));
    var newPartyView = new NewPartyView($("#newPartyView"));
    var ingredientsView = new IngredientsView($("#ingredientsView"));
    var preparationsView = new PreparationsView($("#preparationsView"), model);

    var overviewView = new OverviewView($("#overviewView"), model);
    var selectDishView = new SelectDishView($("#selectDishView"), model);
	var previousView = new PreviousView($("#previousparties"));
    var mealsView = new MealsView($("#meals-view"), model);

});