/**
 * Created by r.u.f.f on 13.05.2017.
 */
(function() {
'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
    });
}])

.controller('loginCtrl', ['$rootScope', '$location', function($rootScope, $location) {
    this.submit = function () {
    if(this.username === 'admin' && this.password === 'admin') {
        $rootScope.loggedIn = true;
        $location.path('/main')
    } else {
        alert('Wrong!');
    }
  };
}]);

})();