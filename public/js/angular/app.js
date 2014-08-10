var floc = angular.module('floc', ['ngRoute', 'ui.slider']);

floc.config(function($routeProvider) {
    return $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '/index.html'
        })
        .otherwise({ redirectTo: '/' });
});

