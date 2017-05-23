/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.example')
        .config(config);

    checkAuth.$inject = ['$rootScope', '$location'];

    /////////////////

    function config($routeProvider) {
        $routeProvider
            .when('/example', {
                resolve: {
                    // checkAuth: checkAuth
                },
                templateUrl: 'example/example.html',
                controller: 'ExampleCtrl',
                controllerAs: 'example'
            });
    };

    function checkAuth($rootScope, $location) {
        if(!$rootScope.loggedIn) {
            $location.path('/login');
        }
    };

})();