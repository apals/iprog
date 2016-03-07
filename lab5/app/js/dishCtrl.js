// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

    $scope.loading = true;
    $scope.error = false;

    var dish;

    Dinner.Dish.get({id: $routeParams.dishId}, function(data) {

        $scope.loading = false;
        $scope.dishPreparations = data.Instructions;
        $scope.dish = data;
        dish = data;
    }, function(err) {
        $scope.error = true;
        $scope.loading = false;
        console.log(err);
    });

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    };

    $scope.getTotalDishPrice = function() {
        return Dinner.getDishPrice(dish);
    };


    $scope.addDishToMenu = function() {
        if(!dish) return;

        console.log("yeah adding dish to menu");

        Dinner.addDishToMenu(dish);
    };
  
});