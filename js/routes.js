var app = angular.module('portfolioRoutes',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: 'templates/home.html',
        })
        .when('/overview', {
            templateUrl: 'templates/overview.html',
        })
        .when('/recent', {
            templateUrl: 'templates/recent.html',
            controller: 'portfolioCtrl'
        })
        .when('/latest', {
            templateUrl: 'templates/latest.html',
            controller: 'portfolioCtrl'
        })
        .when('/previous', {
            templateUrl: 'templates/previous.html',
            controller: 'portfolioCtrl'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
        })
        .when('/new-entry', {
            templateUrl: 'templates/new-entry.html',
            controller: 'newPortfolioCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }]);