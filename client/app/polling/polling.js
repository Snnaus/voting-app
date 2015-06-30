'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polling', {
        templateUrl: 'app/polling/polling.html',
        controller: 'PollingCtrl'
      });
  });
