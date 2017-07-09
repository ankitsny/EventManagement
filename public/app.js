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
                template: '<h1 uib-tooltip="heah">Hello World</h1>'
            })
    }
]);