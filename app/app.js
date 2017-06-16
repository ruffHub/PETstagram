(function() {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'app.login',
            'app.posts',
            'app.profile',
            'app.example',
            'restangular'
        ])
        .config(function(RestangularProvider) {
            RestangularProvider.setBaseUrl('http://beta.json-generator.com/api/json/get/EkKWgIpZ7');
        })
})();