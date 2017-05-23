/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .config(config);

    checkAuth.$inject = ['$rootScope', '$location'];

    /////////////////

    function config($routeProvider) {
        $routeProvider
            .when('/posts', {
                resolve: {
                    // checkAuth: checkAuth
                },
                templateUrl: 'posts/posts.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/post', {
                templateUrl: 'views/posts/posts.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });
    };

    function checkAuth($rootScope, $location) {
        if(!$rootScope.loggedIn) {
            $location.path('/login');
        }
    };

})();