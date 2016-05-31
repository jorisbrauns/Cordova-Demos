(function () {
    "use strict";

    angular.module('myApp', [])
     .controller('MyController', ['$scope', function ($scope) {
         $scope.greetMe = 'World';
     }]);
}());