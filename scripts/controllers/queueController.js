'use strict';

angular.module('gaRequest')
.controller('queueCtrl', function($scope, dataService) {
  $scope.testRequests = dataService.testRequests;
  $scope.fields = dataService.fields;

  /* For getting the hardcoded requests in /mock/requests.json.
  To use, change ng-repeat in request-queue.html */
  // dataService.getRequests(function(response) {
  //   $scope.requests = response.data;
  // });

  $scope.sortType = 'submitDate'; // Set default sort type
  $scope.sortReverse = false; // Set default sort order
  $scope.searchRequests = ''; // Set default search/filter term

  /* Passing in index from an ng-repeat with orderBy or a filter
  results in incorrect items being deleted.  Pass in the item itself
  (in this case request), and find the index of that item in the array. */
  $scope.deleteRequest = function(request) {
    var index = $scope.testRequests.indexOf(request);
    $scope.testRequests.splice(index, 1);
  }

});
