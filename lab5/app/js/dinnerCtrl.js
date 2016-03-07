// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.setPartyName = function(name) {
    Dinner.setPartyName(name);
  };

  $scope.getPartyName = function() {
    return Dinner.getPartyName();
  };

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});