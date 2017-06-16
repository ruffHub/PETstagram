/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);


    dataService.$inject = ['Restangular'];

    /////////////

    function dataService(Restangular) {

        var factory = {
            getPosts: getPosts,
            getPostsList: getPostsList
            //,sendComment: sendComment
        };
        return factory;

        function getPosts() {
            return Restangular.all('').getList();
        }

        function getPostsList() {
            return Restangular.all('').getList();
        }
        // function sendComment(comment) {
        //     return $http.post('url', comment);
        // };

    }

})();