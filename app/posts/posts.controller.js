/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('MainCtrl', MainCtrl);


    MainCtrl.$inject = ['$routeParams', 'postsPrepareFunc'];

    /////////////////

    function MainCtrl($routeParams, postsPrepareFunc) {
        var self = this;
        this.posts = postsPrepareFunc.data;
        this.currentPost = [];
        this.postsCount = 10;
        this.postId = $routeParams.postId;
        this.showMorePostsFunc = showMorePostsFunc;
        this.downloadCurrentPostFn = downloadCurrentPostFn;


        ///////////////

        function showMorePostsFunc() {
            self.postsCount += 10
        }

        function downloadCurrentPostFn(postId) {
            var postId = postId;
            console.log(postId);
        }

    }

})();