(function() {
'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
      // resolve: {
      //     "check": function ($rootScope, $location) {
      //             if(!$rootScope.loggedIn) {
      //                 $location.path('/login');
      //             }
      //         }
      //     },
      templateUrl: 'views/main/main.html',
      controller: 'mainCtrl',
      controllerAs: 'main'
  });
}])

.controller('mainCtrl', ['$location', '$routeParams', 'mainService', function($location ,$routeParams, mainService) {
    var self = this;

    mainService.getPosts().then(function (response) {
        self.posts = response.data;
        console.log(self.posts);
    });

    this.postsCount = 15;
    this.showMorePosts = function () {
        self.postsCount += 15;
    };

    this.postId = $routeParams.postId;
}]);

})();