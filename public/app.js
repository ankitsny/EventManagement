var app = angular.module('innovify', [
    'ngRoute',
    'app.controllers',
    'app.services',
    'app.directives',
    'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
    }
]);