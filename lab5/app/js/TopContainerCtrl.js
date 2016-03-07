/**
 * Created by apals on 07/03/16.
 */
// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('TopContainerCtrl', function ($scope, Dinner) {

    $scope.getNumberOfGuests = function() {
        return Dinner.getNumberOfGuests();
    };

    $scope.getPartyName = function() {
        return Dinner.getPartyName();
    }
});