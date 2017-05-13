(function() {
'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'views/main/main.html',
    controller: 'mainCtrl',
    controllerAs: 'main'
  });
}])

.controller('mainCtrl', ['mainService', function(mainService) {
    var self = this;

    mainService.getPosts().then(function (response) {
        self.posts = response.data;
        console.log(self.posts);
    });
}]);

})();