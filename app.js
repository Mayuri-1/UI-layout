 (function(){
    var app = angular.module('app', ['ui.layout']);
    app.controller('DemoController', function($scope, $timeout) {
      $scope.config = {
        flow: 'column'
      };
      $scope.layout = {
        one: false,
        four: false
      };
      $scope.toggle = function(which) {
        $scope.layout[which] = !$scope.layout[which];
      };
      $scope.close = function(which) {
        $scope.layout[which] = true;
      };
      $scope.open = function(which) {
        $scope.layout[which] = false;
      }
      $scope.$on('ui.layout.loaded', function(){
        $timeout(function(){
          $scope.layout.one = true;
        });
      })
    });
 }).call(this);
