'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/showPoll', {
        templateUrl: 'app/showPoll/showPoll.html',
        controller: 'ShowPollCtrl'
      });
  });
