(function() {
   'use strict';

    angular
        .module('app.posters',[])
        .controller('PostersController', ['PostersService','$q','$http',PostersController]);

    function PostersController(PostersService,$q,$http) {
        var self = this;
            self.data = loadAllFilms();

        function loadAllFilms() {
            var allPosters = PostersService.getFilms().then(function (response) {
                return response
            });
            return allPosters;
        }


        var posters = this;

        self.data.then(function(listProducts) {

            posters.tiles = buildGridModel({
                title: "Title",
                background: "red",
                width: "200px",
                height: "300px",
                id: null,
                isAnimating: false,
                isClicked: false
            },listProducts.data.products);

        });


        function buildGridModel(tileTmpl,products) {
            console.log('BUILDING');
            var it, results = [];
            for (var j = 0; j < 20; j++) {
                it = angular.extend({}, tileTmpl);
                it.id = j;
                // it.icon = it.icon + (j + 1);
                it.title = products[j].title;
                it.span = {row: "1", col: "1"};
                it.background = "white";
                it.span.row = it.span.col = 1;


                results.push(it);

            }
            return results;
        }

    }

    PostersController.prototype.lastItemClicked = null;
    PostersController.prototype.mouseHndlr = function ($event,item) {
        var card = angular.element($event.target).parent();
        switch($event.type) {
            case "click":
                console.log(card);
                if(PostersController.lastItemClicked != null)
                    PostersController.lastItemClicked.isClicked = false;

                item.isClicked = true;
                PostersController.lastItemClicked = item

                break;
            default:

            case 'mouseover':
                item.isAnimating = true;
                break;
            case 'mouseout':
                item.isAnimating = false;
                break;


        }
    }

})();