'use strict';

angular.module('app.about', []).
    controller('AboutController', ['$http',AboutController]).
    run(function () {
        console.log('RUNNING ABOUT');
    });

function AboutController($http) {
    var self = this;
    var about = this;

    about.title = 'Title About yekra';

}