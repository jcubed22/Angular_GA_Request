angular.module('gaRequest')
.directive('newRequest', function() {
  return {
    templateUrl: 'templates/new-request.html',
    controller: 'requestCtrl',
    replace: true
  }
});
