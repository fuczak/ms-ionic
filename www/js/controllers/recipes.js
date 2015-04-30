angular.module('starter.controllers')
  .controller('RecipesCtrl', function($scope, recipes) {
    $scope.recipes = recipes;

    $scope.clearSearch = function() {
      $scope.searchText = '';
    };
  });
