'use strict';

angular.module('gaRequest')
.controller('requestCtrl', function($scope, dataService) {
  $scope.dataService = dataService;
  $scope.testRequests = dataService.testRequests;
  $scope.fields = dataService.fields; // Tells $scope where to write fields values to?
});
