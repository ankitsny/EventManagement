angular.module('app.controllers')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', 'toastr'];

function LoginController($scope, toastr) {
    console.log("Hello");
    $scope.login = function () {
        toastr.success('Hello world!', 'Toastr fun!', { closeButton: true });
    }
}