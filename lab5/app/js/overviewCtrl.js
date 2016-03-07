/**
 * Created by marcus on 2016-03-07.
 */

dinnerPlannerApp.controller('overviewCtrl', function ($scope, $routeParams, Dinner) {

    $scope.getFullMenu = function () {
        return Dinner.getFullMenu();
    };

    $scope.getNumberOfGuests = function () {
        return Dinner.getNumberOfGuests();
    };

    $scope.getTotalDishPrice = function () {
        return Dinner.getDishPrice(dish);
    };


});
