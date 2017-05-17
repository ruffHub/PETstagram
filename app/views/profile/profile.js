(function() {
'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
      // resolve: {
      //     "check": function ($rootScope, $location) {
      //         if(!$rootScope.loggedIn) {
      //             $location.path('/login');
      //         }
      //     }
      // },
      templateUrl: 'views/profile/profile.html',
      controller: 'profileCtrl',
      controllerAs: 'profile'
  });
}])

.controller('profileCtrl', [function() {

}]);

})();