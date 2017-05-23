/**
 * Created by r.u.f.f on 23.05.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('MainCtrl', MainCtrl);


    MainCtrl.$inject = ['$routeParams', 'dataService'];

    /////////////////

    function MainCtrl($routeParams, dataService) {
        var self = this;
        this.posts = [];
        this.postsCount = 15;
        this.postId = $routeParams.postId;
        this.showMorePostsFunc = showMorePostsFunc;

        downloadPosts();

        ///////////////

        function downloadPosts() {
            return dataService.getPosts().then(function(response) {
                self.posts = response.data;
                console.log(self.posts);
            });
        };

        function showMorePostsFunc() {
            self.postsCount += 15
        };
    }

})();