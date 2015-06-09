angular.module("app", [
    'app.filterbar',
   // 'app.ishouldnotbehere',
    'app.hero',
    'app.posters',
    'app.about',
    'posters.service',
    'ngNewRouter',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    "ngSanitize"
])

    .config(function ($componentLoaderProvider) {
        $componentLoaderProvider.setTemplateMapping(function (name) {
            var dashName = dashCase(name);
            // customized to use app prefix
            return './app/components/' + dashName + '/' + dashName + '.html';
        });
    })

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'default': '400', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
            .accentPalette('blue', {
                'default': '400' // use shade 200 for default, and keep all other shades the same
            });
    })

    .config(function ($mdIconProvider) {
        $mdIconProvider.iconSet("avatar", './images/avatar-icons.svg', 128);
    })

    .controller("appCtrl", function ($router, $scope, $rootScope, $mdDialog, $mdMedia) {

        $scope.$watch(function () {
                return $mdMedia('gt-md');
            },
            function (matched) {
                if (matched) {
                    console.log("screen is greater than medium");
                }

            }
        );

        $router.config([
            {
                path: '/', components: {
                hero: 'hero',
                content: 'posters'
            }, as: '/'
            }
            ,
            {
                path: '/contact', components: {
                hero: 'hero',
                content: 'posters'
            }, as: 'contact'
            }
            ,
            {
                path: '/about', components: {
                hero: 'hero',
                content: 'about'
            }, as: 'about'
            }
            ,
        ]);

    }

);
