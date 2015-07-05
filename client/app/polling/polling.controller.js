'use strict';

angular.module('workspaceApp')
  .controller('PollingCtrl', function ($scope, $http, Auth, $location) {
    $scope.getPolls = [];
    $scope.pastPolls = [];
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin();
    $scope.currentUser = Auth.getCurrentUser();
    
    $http.get('/api/polls').success(function(getPolls){
      $scope.getPolls = getPolls;
      $scope.getPolls.forEach(function(poll){
        poll.show = true;
        hideDeleted(poll);
        if(poll.show === false){
          $scope.pastPolls.push(poll);
        }
      });
      console.log($scope.getPolls, $scope.pastPolls);
      console.log(getPolls[0].user, $scope.currentUser, $scope.isLoggedIn);
    });
    
    
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
    
    $scope.redirectNew = function(){
      $location.path('/newPoll');
    };
  });
