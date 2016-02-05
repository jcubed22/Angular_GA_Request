'use strict';

angular.module('gaRequest')
.controller('mainCtrl', function($scope, dataService) {
  $scope.dataService = dataService;
  $scope.testRequests = dataService.testRequests;
  // Tells $scope where to write fields values to?
  $scope.fields = dataService.fields;

  /* For getting the hardcoded requests in /mock/requests.json.
  To use, change ng-repeat in request-queue.html */
  dataService.getRequests(function(response) {
    $scope.requests = response.data;
  });

  $scope.sortType = 'submitDate'; // Set default sort type
  $scope.sortReverse = false; // Set default sort order
  $scope.searchRequests = ''; // Set default search/filter term

});
