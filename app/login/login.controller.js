/**
 * Created by r.u.f.f on 23.05.2017.
 */

(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', loginCtrl);


    loginCtrl.$inject = ['$rootScope', '$location'];

    //////////////////////

    function loginCtrl($rootScope, $location) {
        this.logInFunc = logInFunc;

        function logInFunc() {
            if(this.username === 'admin' && this.password === 'admin') {
                $rootScope.loggedIn = true;
                $location.path('/posts')
            } else {
                alert('Wrong!');
            }
        }
    };

})();