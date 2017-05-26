/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);


    dataService.$inject = ['$http'];

    /////////////

    function dataService($http) {
        var factory = {
            getPosts: getPosts,
            getCurrentPost: getCurrentPost
        };
        return factory;

        function getPosts() {
            return $http.get('https://jsonplaceholder.typicode.com/photos/');
        };

        function getCurrentPost(i) {
            return $http.get('https://jsonplaceholder.typicode.com/photos/' + i);
        };

    }


})();