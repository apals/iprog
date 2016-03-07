// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope, Dinner) {

    // TODO in Lab 5: you will need to implement a method that searchers for dishes
    // including the case while the search is still running.
    $scope.loading = false;
    $scope.error = false;

    $scope.search = function (query, singleSelect) {

        $scope.loading = true;
        $scope.status = "Searching...";
        Dinner.DishSearch.get({title_kw: query, any_kw: singleSelect}, function (data) {
            $scope.dishes = data.Results;
            console.log(data.Results);
            $scope.status = "Showing " + data.Results.length + " results";
            $scope.loading = false;
        }, function (data) {
            $scope.status = "There was an error";
            $scope.loading = false;
            $scope.error = true;
        });
    }

});