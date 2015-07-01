'use strict';

angular.module('workspaceApp')
  .controller('PollingCtrl', function ($scope, $http, Auth) {
    $scope.getPolls = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    $http.get('/api/polls').success(function(getPolls){
      $scope.getPolls = getPolls;
    });
    
    $scope.addPoll = function(){
      if($scope.newPoll === ''){
        return;
      }
      $http.post('/api/polls', { name: $scope.newPoll });
      $scope.newPoll = '';
    };
    
    $scope.deletePoll = function(poll) {
      $http.delete('/api/polls/' + poll._id);
    };
    
  });
