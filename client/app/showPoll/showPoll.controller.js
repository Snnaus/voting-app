'use strict';

angular.module('workspaceApp')
  .controller('ShowPollCtrl', function ($scope, $http, $routeParams, Auth, $log) {
    $scope.$log = $log;
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin();
    $scope.currentUser = Auth.getCurrentUser();
    $http.get('/api/polls/'+$routeParams.id).success(function(poll){
      $scope.poll = poll;
      $scope.userChoice = {choice: null};
      $scope.show = updateShow($scope.currentUser, poll, $scope.isLoggedIn);
      if($scope.show === false){
        var labels = [];
        var datapts = [];
        for(var i in $scope.poll.choices){
          labels.push(i);
          datapts.push($scope.poll.choices[i]);
        }
        var data = {
          labels: labels,
          datasets: [{data: datapts}]
        };
        
        var ctx = document.getElementById('bar').getContext('2d');
      
        var newChart = new Chart(ctx).Bar(data, {
          responsive: false
        }); 
      }
    });
    
    $scope.voting = function(){
        var labels = [];
        var datapts = [];
        for(var i in $scope.poll.choices){
          labels.push(i);
          datapts.push($scope.poll.choices[i]);
        }
        var data = {
          labels: labels,
          datasets: [{data: datapts}]
        };
      
        var ctx = document.getElementById('bar').getContext('2d');
      
        var newChart = new Chart(ctx).Bar(data, {
          responsive: false
        }); 
        
        $scope.poll.voters.push($scope.currentUser.name);
        $http.put('/api/polls/'+$routeParams.id, $scope.poll);
        $scope.show = updateShow($scope.currentUser, $scope.poll, $scope.isLoggedIn);
      };
    
    
    var updateShow = function(user, poll, logged){
      if(logged && poll.voters.indexOf(user.name) === -1){
        return true;
      } else{
        return false;
      }
    };
    /*for(var i in $scope.poll.choices){
      $scope.labels.push(i);
      $scope.data.push($scope.poll[i]);
    }*/
    
  });
