'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [];
    
    $scope.signUp = function(){
      $location.path('/signup');
    };
    
    $scope.viewPolls = function(){
      $location.path('/polling');
    };
    
  });
