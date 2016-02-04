'use strict';

angular.module('gaRequest')
.service('dataService', function($http) {
    this.getRequests = function(callback) {
        $http.get('mock/requests.json')
        .then(callback);
    };

});
