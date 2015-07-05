'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newPoll', {
        templateUrl: 'app/newPoll/newPoll.html',
        controller: 'NewPollCtrl'
      });
  });
