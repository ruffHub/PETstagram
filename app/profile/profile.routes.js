/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.profile')
        .config(config);

    checkAuth.$inject = ['$location', '$sessionStorage'];

    /////////////////

    function config($routeProvider) {
        $routeProvider
            .when('/profile', {
                resolve: {
                    checkAuth: checkAuth
                },
                templateUrl: 'profile/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile'
            });
    };

    function checkAuth($location, $sessionStorage) {
        if(!$sessionStorage.loggedIn) {
            $location.path('/login');
        }
    };

})();