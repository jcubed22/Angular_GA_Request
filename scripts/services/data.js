'use strict';

angular.module('gaRequest')
.service('dataService', function($http) {
  // Is there a better way to do this besides
  // creating a variable and then setting it equal to
  // this.something?
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
  this.testRequests = testRequests;

});
