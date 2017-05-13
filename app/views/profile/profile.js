(function() {
'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'views/profile/profile.html',
    controller: 'profile'
  });
}])

.controller('profile', [function() {

}]);

})();