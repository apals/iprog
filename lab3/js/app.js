$(function () {
    //We instantiate our model
    var model = new DinnerModel();
    model.generateTestParty();

    //And create the needed controllers and views

    var ingredientsView = new IngredientsView($("#ingredientsView"), model);
    var preparationsView = new PreparationsView($("#preparationsView"), model);

    var overviewView = new OverviewView($("#overviewView"), model);
    var selectDishView = new SelectDishView($("#selectDishView"), model);
    
    var panelView = new PanelView($("#panel"), model);
    var panelViewController = new PanelViewController(panelView, model);

    var mealsView = new MealsView($("#meals-view"), model);

    var detailView = new DetailView($("#detail-view"), model);
    var preparationsOverviewView = new PreparationsOverviewView($("#preparations-overview-view"), model);
    var headerInfoView = new HeaderInfoView($("#header-info-view"), model);

});