/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .config(config);

    checkAuth.$inject = ['$location', '$sessionStorage'];
    dataPrepareFunc.$inject = ['dataService'];

    /////////////////

    function config($routeProvider) {
        $routeProvider
            .when('/posts', {
                resolve: {
                    checkAuth: checkAuth,
                    dataPrepareFunc: dataPrepareFunc
                },
                templateUrl: 'posts/posts.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/post', {
                resolve: {
                    checkAuth: checkAuth
                },
                templateUrl: 'posts/post.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });
    };

    function checkAuth($location, $sessionStorage) {
        if(!$sessionStorage.loggedIn) {
            $location.path('/login');
        }
    }

    function dataPrepareFunc(dataService) {
        return dataService.getPosts();
    }

})();