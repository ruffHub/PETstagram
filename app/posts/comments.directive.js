/**
 * Created by r.u.f.f on 03.06.2017.
 */
(function() {
    'use strict';

    angular
        .module('app.posts')
        .directive('comments', comments);

    ////////////////

    CommentCtrl.$inject = ['dataService'];

    function comments() {
        var directive = {
            templateUrl: 'posts/comments.html',
            restrict: 'EA',
            controller: CommentCtrl,
            controllerAs: 'vm'
        };
        return directive;
    }

    function CommentCtrl(dataService) {
        var self = this;
        this.comment = {};
        this.addCommentFn = addCommentFn;

        function addCommentFn(post) {
            self.comment.createdOn = Date.now();
            post.comments.push(self.comment);
            // dataService.sendComment(post.comments);
            self.comment = {};
        };
    }

})();