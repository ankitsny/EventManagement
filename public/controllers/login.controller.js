angular.module('app.controllers')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope'];

function LoginController($scope) {
    console.log("Hello");
}