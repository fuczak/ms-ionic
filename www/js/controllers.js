angular.module('starter.controllers', [])
.controller('SplashCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
	$scope.skipIntro = function() {
		$state.go('tab.plan');
	};
})
.controller('PlanCtrl', function($scope) {
	
})
.controller('RecipesCtrl', function($scope) {
	
})
.controller('ProfileCtrl', function($scope) {
	
})