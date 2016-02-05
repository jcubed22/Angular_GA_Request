'use strict';

angular.module('gaRequest')
.service('dataService', function($http) {
  var fields = {};
  var testRequests = [
    {
      jobName: "That One",
      jobType: "Inventory",
      mediaType: "Printed",
      dimensions: "4x4",
      dueDate: "4/20/2106",
      itemNumber: "13987235",
      requestedBy: "Bubba",
      submitDate: "Today"
    }
  ];
  this.fields = fields;
  this.testRequests = testRequests;

  this.getRequests = function(callback) {
    $http.get('mock/requests.json')
    .then(callback);
  };

  this.addRequest = function() {
    // Sets variable equal to current date as formatted by moment.js
    var now = moment().format("MM/DD/YYYY");
    // Formats dueDate form field from datepicker into more readable format.
    var due = moment(fields.dueDate).format("MM/DD/YYYY");
    var response = {
      jobName: fields.jobName,
      jobType: fields.jobType,
      mediaType: fields.mediaType,
      dimensions: fields.dimensions,
      dueDate: due,
      itemNumber: fields.itemNumber,
      requestedBy: fields.requestedBy,
      submitDate: now
    };
    this.testRequests.push(response);
    fields.jobName = null; // Reset form fields to null for next input.
    fields.jobType = "Marketing";
    fields.mediaType = "Printed";
    fields.dimensions = null;
    fields.dueDate = null;
    fields.itemNumber = null;
    fields.requestedBy = null;
  };

  /* Passing in index from an ng-repeat with orderBy or a filter
  results in incorrect items being deleted.  Pass in the item itself
  (in this case request), and find the index of that item in the array. */
  this.deleteRequest = function(request) {
    var index = this.testRequests.indexOf(request);
    this.testRequests.splice(index, 1);
  }

});
