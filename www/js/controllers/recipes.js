angular.module('starter.controllers')
  .controller('RecipesCtrl', function($scope, recipes) {
    $scope.recipes = recipes.data;

    $scope.clearSearch = function() {
      $scope.searchText = '';
    };
  });
