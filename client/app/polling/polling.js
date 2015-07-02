'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polling', {
        templateUrl: 'app/polling/polling.html',
        controller: 'PollingCtrl'
      })
      .when('/showPoll/id/:id', {
        templateUrl: 'app/showPoll/showPoll.html',
        controller: 'ShowPollCtrl'
      });
  });
