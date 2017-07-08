var app = angular.module('innovify', [
    'ngRoute',
    'app.controllers',
    'app.services',
    'app.directives'
]);

app.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when('/', {
                template: '<h1>Hello World</h1>'
            })
    }
]);