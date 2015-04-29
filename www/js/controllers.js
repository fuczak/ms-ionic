angular.module('starter.controllers', [])
.controller('SignInCtrl', function($scope, $state) {
	$scope.skipLogin = function() {
		$state.go('tabs.recipes')
	};
})
.controller('PlanCtrl', function($scope) {
	
})
.controller('RecipesCtrl', function($scope, recipes) {
	$scope.recipes = recipes.data;

	$scope.clearSearch = function() {
		$scope.searchText = '';
	};
})
.controller('RecipeDetailCtrl', function($scope, recipe) {
	$scope.recipe = recipe;
})
.controller('ProfileCtrl', function($scope, ingredients) {
	$scope.ingredients = ingredients.data;
	console.log(ingredients)
})