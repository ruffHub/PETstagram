/**
 * Created by r.u.f.f on 23.05.2017.
 */

(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', loginCtrl);


    loginCtrl.$inject = [
        '$location',
        '$sessionStorage'
    ];

    //////////////////////

    function loginCtrl($location, $sessionStorage){

        this.logInFunc = logInFunc;

        function logInFunc() {
            if(this.username === 'admin' && this.password === 'admin') {
                $sessionStorage.loggedIn = true;
                $location.path('/posts');

            } else {
                alert('Wrong!');
            }
        }
    }

})();

// this.logInFunc = logInFunc;
//
// function logInFunc() {
//     if(this.username === 'admin' && this.password === 'admin') {
//         $rootScope.loggedIn = true;
//         $location.path('/posts')
//     } else {
//         alert('Wrong!');
//     }
// }