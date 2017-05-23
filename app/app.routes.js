/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';
// Declare app level module which depends on views, and components
    angular
        .module('app')
        .config(config);

    /////////////

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .otherwise({redirectTo: '/posts'});
    };

})();