angular.module('gaRequest')
.directive('requestQueue', function() {
  return {
    templateUrl: 'templates/request-queue.html',
    controller: 'queueCtrl',
    replace: true
  }
});
