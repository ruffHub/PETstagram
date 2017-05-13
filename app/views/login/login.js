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

.controller('loginCtrl', ['$scope', '$location', function($scope, $location) {

    this.submit = function () {
        // var uname = $scope.username;
        // var password = $scope.password;

    if(this.username === 'admin' && this.password === 'admin') {
        $location.path('/main')
    } else {
        alert('Wrong!');
    }
  };
}]);

})();