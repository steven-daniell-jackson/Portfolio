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
            controller: 'recentPortfolioCtrl'
        })
        .when('/latest', {
            templateUrl: 'templates/latest.html',
            controller: 'latestPortfolioCtrl'
        })
        .when('/previous', {
            templateUrl: 'templates/previous.html',
            controller: 'previousPortfolioCtrl'
        })
        .when('/newsletters', {
            templateUrl: 'templates/newsletters.html',
            controller: 'newsletterPortfolioCtrl'
        })
        .when('/landingpages', {
            templateUrl: 'templates/landingpages.html',
            controller: 'landingpagesPortfolioCtrl'
        })
        .when('/other', {
            templateUrl: 'templates/other.html',
            controller: 'otherPortfolioCtrl'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
        })
        .when('/new-entry', {
            templateUrl: 'templates/new-entry.html',
            controller: 'otherPortfolioCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }]);