'use strict';

angular.module('gaRequest')
.controller('requestCtrl', function($scope, dataService) {
  $scope.testRequests = dataService.testRequests;
  $scope.fields = {};

  $scope.addRequest = function() {
    // Sets variable equal to current date as formatted by moment.js
    var now = moment().format("MM/DD/YYYY");
    // Formats dueDate form field from datepicker into more readable format.
    var due = moment($scope.fields.dueDate).format("MM/DD/YYYY");
    var response = {
      jobName: $scope.fields.jobName,
      jobType: $scope.fields.jobType,
      mediaType: $scope.fields.mediaType,
      dimensions: $scope.fields.dimensions,
      dueDate: due,
      itemNumber: $scope.fields.itemNumber,
      requestedBy: $scope.fields.requestedBy,
      submitDate: now
    };
    $scope.testRequests.push(response);
    $scope.fields.jobName = null; // Reset form fields to null for next input.
    $scope.fields.jobType = "Marketing";
    $scope.fields.mediaType = "Printed";
    $scope.fields.dimensions = null;
    $scope.fields.dueDate = null;
    $scope.fields.itemNumber = null;
    $scope.fields.requestedBy = null;
  };
});
