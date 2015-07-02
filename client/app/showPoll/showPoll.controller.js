'use strict';

angular.module('workspaceApp')
  .controller('ShowPollCtrl', function ($scope, $http, $routeParams, Auth) {
    $scope.poll = {};
    console.log($routeParams);
    $http.get('/api/polls/'+$routeParams.id).success(function(poll){
      $scope.poll = poll;
    });
  });
