$(function () {
    //We instantiate our model
    var model = new DinnerModel();
    model.generateTestParty();

    //And create the needed controllers and views
    //  var exampleView = new ExampleView($("#exampleView"));
    var newPartyView = new NewPartyView($("#newPartyView"));
    var ingredientsView = new IngredientsView($("#ingredientsView"), model);
    var preparationsView = new PreparationsView($("#preparationsView"), model);

    var overviewView = new OverviewView($("#overviewView"), model);
    var selectDishView = new SelectDishView($("#selectDishView"), model);
    var panelView = new PanelView($("#panel"), model);
    var panelViewController = new PanelViewController(panelView, model);
    var previousView = new PreviousView($("#previousparties"));
    var mealsView = new MealsView($("#meals-view"), model);
    var mealsViewController = new MealsViewController(mealsView, model);

    var detailView = new DetailView($("#detail-view"), model);
    var preparationsOverviewView = new PreparationsOverviewView($("#preparations-overview-view"), model);
    var headerInfoView = new HeaderInfoView($("#header-info-view"), model);

});