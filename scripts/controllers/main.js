'use strict';

angular.module('gaRequest')
.controller('mainCtrl', function($scope, dataService) {
    dataService.getRequests(function(response) {
        console.log(response.data);
        $scope.requests = response.data;
    });

    var fields = {};
    $scope.fields = fields;
    $scope.testRequests = [
                            {
                                jobName: "That One Thing",
                                jobType: "Inventory",
                                mediaType: "Printed",
                                dimensions: "4x4",
                                dueDate: "4/20/2106",
                                itemNumber: "13987235",
                                requestedBy: "Bubba",
                                submitDate: "Today"
                            }
                        ];

    $scope.addRequest = function() {
        console.log("I worked!");
        var response = {
                        jobName: fields.jobName,
                        jobType: fields.jobType,
                        mediaType: fields.mediaType,
                        dimensions: fields.dimensions,
                        dueDate: fields.dueDate,
                        itemNumber: fields.itemNumber,
                        requestedBy: fields.requestedBy,
                        submitDate: "Today"
                        };
        $scope.testRequests.push(response);
        fields.jobName = null;
        fields.jobType = null;
        fields.mediaType = null;
        fields.dimensions = null;
        fields.dueDate = null;
        fields.itemNumber = null;
        fields.requestedBy = null;
        // fields.submitDate = null;
    };

    $scope.deleteRequest = function(request, $index) {
        $scope.testRequests.splice($index, 1);
    }



    $scope.sortType = 'submitDate'; // Set default sort type
    $scope.sortReverse = false; // Set default sort order
    $scope.searchRequests = ''; // Set default search/filter term

});
