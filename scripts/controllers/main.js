'use strict';

angular.module('gaRequest')
.controller('mainCtrl', function($scope, dataService) {
  $scope.dataService = dataService;
  $scope.testRequests = dataService.testRequests;
  $scope.fields = dataService.fields;

  dataService.getRequests(function(response) {
    $scope.requests = response.data;
  });

  $scope.sortType = 'submitDate'; // Set default sort type
  $scope.sortReverse = false; // Set default sort order
  $scope.searchRequests = ''; // Set default search/filter term

});
