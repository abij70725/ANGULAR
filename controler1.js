var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.num2 = 0;
    $scope.num1 = 0;
    $scope.sum = function() {
        return $scope.num1 + $scope.num2;
    };
});
