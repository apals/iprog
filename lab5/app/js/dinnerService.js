// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner', function ($resource) {

    const api_key = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
    this.numberOfGuest = 2;
    var partyName = "";
    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:6,api_key: api_key});
    this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key: api_key});

    var fullMenu = [];


    this.setNumberOfGuests = function (num) {
        this.numberOfGuest = num;
    };

    this.getNumberOfGuests = function () {
        return this.numberOfGuest;
    };

    this.setPartyName = function (name) {
        this.partyName = name;
    };

    this.getPartyName = function () {
        return this.partyName;
    };

    this.addDishToMenu = function(dish) {
        for (var i = 0; i < fullMenu.length; i++) {
            if (fullMenu[i].Category === dish.Category) {
                //remove
                fullMenu.splice(i, 1);
            }
        }

        //add the new one
        fullMenu.push(dish);
    };

    this.getFullMenu = function() {
        return fullMenu;
    };

    this.getDishPrice = function(dish) {
        if(!dish) return 0;
        var price = 0;
        for(var i = 0; i < dish.Ingredients.length; i++) {
            if(isNaN(dish.Ingredients[i].DisplayQuantity * this.getNumberOfGuests())) {

            } else {
                price += dish.Ingredients[i].DisplayQuantity * this.getNumberOfGuests();
            }
        }
        return price;
    };


    this.getTotalMenuCost = function() {
        var price = 0;
        for(var i = 0; i < fullMenu.length; i++) {
            price += this.getDishPrice(fullMenu[i]);
        }
        return price;
    };


    // TODO in Lab 5: Add your model code from previous labs
    // feel free to remove above example code
    // you will need to modify the model (getDish and getAllDishes)
    // a bit to take the advantage of Angular resource service
    // check lab 5 instructions for details


    // Angular service needs to return an object that has all the
    // methods created in it. You can consider that this is instead
    // of calling var model = new DinnerModel() we did in the previous labs
    // This is because Angular takes care of creating it when needed.
    return this;

});