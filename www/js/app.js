// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('AppliForum', ['ionic', 'AppliForum.ListeEntreprise', 'AppliForum.Common', 'AppliForum.DetailEntreprise'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'modules/menu/menu.html'
    })

    .state('app.accueil', {
        url: '/accueil',
        views: {
            'menuContent': {
                templateUrl: 'modules/accueil/accueil.html'
            }
        }
    })

    .state('app.typeEntreprise', {
        url: '/typeEntreprise',
        views: {
            'menuContent': {
                templateUrl: 'modules/typeEntreprise/typeEntreprise.html'
            }
        }
    })

    .state('app.listeEntreprise', {
        url: '/listeEntreprise',
        views: {
            'menuContent': {
                templateUrl: 'modules/listeEntreprise/listeEntreprise.html',
                controller: 'ListeEntrepriseCtrl'
            }
        }
    })

    .state('app.detailEntreprise', {
        url: '/detailEntreprise/:Id',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'modules/detailEntreprise/detailEntreprise.html',
                controller: 'DetailEntrepriseCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/accueil');
});
