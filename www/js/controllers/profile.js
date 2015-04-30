angular.module('starter.controllers')
  .controller('ProfileCtrl', function($scope, ingredients) {
    $scope.ingredients = ingredients.data;
    console.log(ingredients);
  });
