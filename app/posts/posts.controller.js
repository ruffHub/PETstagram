/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['dataPrepareFunc'];

    /////////////////

    function MainCtrl(dataPrepareFunc) {
        var self = this;
        this.posts = dataPrepareFunc;
        this.postsCount = 10;
        this.showMorePostsFunc = showMorePostsFunc;
        this.setCurrentPostFn = setCurrentPostFn;

        function showMorePostsFunc() {
            self.postsCount += 10
        }

        function setCurrentPostFn(post) {
            self.currentPost = post;
            console.log(self.currentPost);
        }

    }
})();