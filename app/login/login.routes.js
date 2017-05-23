/**
 * Created by r.u.f.f on 23.05.2017.
 */

(function() {
    'use strict';

    angular
        .module('app.login')
        .config(config);

    //////////////////////

    function config($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            });
    };

})();