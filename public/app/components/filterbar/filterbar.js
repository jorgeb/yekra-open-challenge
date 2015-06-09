'use strict';

angular.module('app.filterbar', [])
    .controller('FilterbarController',['$window','$location',FilterbarController]);
function FilterbarController($window,$location) {

    var self = this;
    self.loc = $location;

    this.selectedIndex=0;
    this.navData = {
        secondLocked : false,
    };

    angular.element($window).bind('scroll', function () {

    });


};


FilterbarController.prototype.tabClick = function(i) {
    console.log('Filterbar Controller');

    switch(i) {
        case 0:
            this.loc.path( "/" );
            break;
        case 1:
            this.loc.path( "/contact" );
            break;
        case 2:
            this.loc.path( "/about" );
            break;

    }
};


FilterbarController.prototype.tabNext = function() {
    this.navData = Math.min(this.navData.selectedIndex + 1, 2) ;
};

FilterbarController.prototype.tabPrev = function() {
    this.navData = Math.max(this.navData.selectedIndex - 1, 0);
};

FilterbarController.prototype.navData = function() {
    return this.navData;
};

