'use strict';

gaRequest.controller('mainCtrl', function($scope, dataService) {
    dataService.getRequests(function(response) {
        console.log(response.data);
        $scope.requests = response.data;
    });
});
