'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, $http, Auth, $location) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin();
    $scope.currentUser = Auth.getCurrentUser();
    if($scope.isLoggedIn === false){
      $location.path('/polling');
    }
    
    
    $scope.newName = '';
    $scope.newChoices = [];
    $scope.additionalChoice = '';
    $scope.addChoice = function(currChoices, newChoice){
      if(newChoice !== ''){
      currChoices.push(newChoice);  
      }
      $scope.additionalChoice = '';
    };
    
    $scope.createPoll = function(name, choices, user){
      var newPoll = {
        name: name,
        user: user.name,
        active: true,
        voters: []
      };
      
      var finalChoices = {};
      choices.forEach(function(choice){
        finalChoices[choice] = 0;
      });
      
      newPoll.choices = finalChoices;
      $http.post('/api/polls/', newPoll);
      $location.path('/polling');
    };
  });
