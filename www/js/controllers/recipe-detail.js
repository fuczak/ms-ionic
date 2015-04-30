angular.module('starter.controllers')
  .controller('RecipeDetailCtrl', function($scope, recipe) {
    $scope.recipe = recipe;
  });
