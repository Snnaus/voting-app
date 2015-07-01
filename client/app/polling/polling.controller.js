'use strict';

angular.module('workspaceApp')
  .controller('PollingCtrl', function ($scope, $http) {
    $scope.getPolls = [];
    
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
