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
    //Sets variable equal to current date as formatted by moment.js
    var now = moment().format("MM/DD/YYYY");
    // var due = moment(fields.dueDate, "MM/DD/YYYY");
    var response = {
      jobName: fields.jobName,
      jobType: fields.jobType,
      mediaType: fields.mediaType,
      dimensions: fields.dimensions,
      dueDate: fields.dueDate,
      itemNumber: fields.itemNumber,
      requestedBy: fields.requestedBy,
      submitDate: now
    };
    this.testRequests.push(response);
    fields.jobName = null;
    fields.jobType = null;
    fields.mediaType = null;
    fields.dimensions = null;
    fields.dueDate = null;
    fields.itemNumber = null;
    fields.requestedBy = null;
  };

  this.deleteRequest = function(request, $index) {
    this.testRequests.splice($index, 1);
  }

});
