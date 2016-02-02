'use strict';

gaRequest.controller('mainCtrl', function($scope, dataService) {
    dataService.getRequests(function(response) {
        console.log(response.data);
        $scope.requests = response.data;
    });

    $scope.sortType = 'submitDate'; // Set default sort type
    $scope.sortReverse = false; // Set default sort order
    $scope.searchRequests = ''; // Set default search/filter term

});
