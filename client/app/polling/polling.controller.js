'use strict';

angular.module('workspaceApp')
  .controller('PollingCtrl', function ($scope, $http, Auth) {
    $scope.getPolls = [];
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin();
    $scope.currentUser = Auth.getCurrentUser();
    
    $http.get('/api/polls').success(function(getPolls){
      $scope.getPolls = getPolls;
      $scope.getPolls.forEach(function(poll){
        poll.show = true;
        hideDeleted(poll);
      });
      console.log(getPolls[0].user, $scope.currentUser, $scope.isLoggedIn);
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
    
    $scope.resetPolls = function(){
      $scope.getPolls.forEach(function(poll){
        poll.show = true;
        hideDeleted(poll);
      });
    };
    
    $scope.updatePolls = function(){
      console.log($scope.getPolls);
      $scope.getPolls.forEach(function(poll){
        if(poll.user == $scope.currentUser.name){
          poll.show = true;
        } else{
          poll.show = false;
        }
        hideDeleted(poll);
      });
    };
    
    var hideDeleted = function(poll){
      if(poll.active === false){
        poll.show = false;
      }
    };
    
  });
