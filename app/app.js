(function() {
'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.main',
  'myApp.profile'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
}])

.service('mainService', ['$http', function ($http) {
    return {
        getPosts: function () {
            return $http.get('https://jsonplaceholder.typicode.com/photos/');
        },
        getCurrentPost: function () {
            return $http.get('https://jsonplaceholder.typicode.com/photos/');
        }
    };
}]);

})();