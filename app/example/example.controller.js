(function() {
    'use strict';

    angular
        .module('app.example')
        .controller('ExampleCtrl', ExampleCtrl);

    ExampleCtrl.$inject = ['dataPrepareFun'];

    /////////////////

    function ExampleCtrl(dataPrepareFun) {
        var self = this;
        this.posts = dataPrepareFun;
        console.log(self.posts);
    };

})();