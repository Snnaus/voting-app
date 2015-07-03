'use strict';

angular.module('workspaceApp')
  .controller('ShowPollCtrl', function ($scope, $http, $routeParams, Auth, $log) {
    $scope.$log = $log;
    $http.get('/api/polls/'+$routeParams.id).success(function(poll){
      $scope.poll = poll;
      var labels = [];
      var datapts = [];
      console.log(poll.choices);
      for(var i in poll.choices){
        labels.push(i);
        datapts.push(poll.choices[i]);
      }
      
      var data = {
        labels: labels,
        datasets: [{data: datapts}]
      };
      
      var ctx = document.getElementById('bar').getContext('2d');
      
      var newChart = new Chart(ctx).Bar(data, {
        responsive: true,
      });
      
      $scope.userChoice = {};
      
    });
    
    
    
    /*for(var i in $scope.poll.choices){
      $scope.labels.push(i);
      $scope.data.push($scope.poll[i]);
    }*/
    
  });
