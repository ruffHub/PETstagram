/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('MainCtrl', MainCtrl);


    MainCtrl.$inject = ['$routeParams', 'dataService', '$http'];

    /////////////////

    function MainCtrl($routeParams, dataService) {
        var self = this;
        this.posts = [];
        this.currentPost = [];
        this.postsCount = 15;
        this.postId = $routeParams.postId;
        this.showMorePostsFunc = showMorePostsFunc;
        this.downloadCurrentPostFn = downloadCurrentPostFn;

        downloadPostsFn();

        ///////////////

        function downloadPostsFn() {
            return dataService.getPosts().then(function(response) {
                self.posts = response.data;
            });
        };

        function showMorePostsFunc() {
            self.postsCount += 15
        };

        function downloadCurrentPostFn(id) {
            return dataService.getCurrentPost(id).then(function(response) {
                self.currentPost = response.data;
                console.log(self.currentPost);
            });
        }


    }

})();