'use strict';

angular.module('workspaceApp')
  .controller('ShowPollCtrl', function ($scope, $http, $routeParams, Auth, $log) {
    $scope.$log = $log;
    $scope.voted = false;
    $http.get('/api/polls/'+$routeParams.id).success(function(poll){
      $scope.poll = poll;
      
      
      
      
      $scope.userChoice = {};
      
      
      
      
    });
    
    $scope.voting = function(){
        var labels = [];
        var datapts = [];
        for(var i in $scope.poll.choices){
          labels.push(i);
          datapts.push($scope.poll.choices[i]);
        }
        
        $scope.voted = true;
        var data = {
          labels: labels,
          datasets: [{data: datapts}]
        };
      
        var ctx = document.getElementById('bar').getContext('2d');
      
         var newChart = new Chart(ctx).Bar(data, {
          responsive: false,
          }); 
        
        $http.put('/api/polls/'+$routeParams.id, $scope.poll);
        $http.get('/api/polls/'+$routeParams.id).success(function(poll){
          console.log(poll);
        });
      };
    
    /*for(var i in $scope.poll.choices){
      $scope.labels.push(i);
      $scope.data.push($scope.poll[i]);
    }*/
    
  });
