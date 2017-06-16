/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.example')
        .config(config);

    checkAuth.$inject = ['$location', '$sessionStorage'];
    dataPrepareFun.$inject = ['dataService'];

    /////////////////

    function config($routeProvider) {
        $routeProvider
            .when('/example', {
                resolve: {
                    checkAuth: checkAuth,
                    dataPrepareFun: dataPrepareFun
                },
                templateUrl: 'example/example.html',
                controller: 'ExampleCtrl',
                controllerAs: 'example'
            });
    };

    function checkAuth($location, $sessionStorage) {
        if(!$sessionStorage.loggedIn) {
            $location.path('/login');
        }
    };
    function dataPrepareFun(dataService) {
        return dataService.getPostsList();
    }

})();