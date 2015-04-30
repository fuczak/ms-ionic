// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'UserCtrl'
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.plan', {
      url: '/plan',
      views: {
        'plan-tab': {
          templateUrl: 'templates/plan.html',
          controller: 'PlanCtrl'
        }
      }
    })
    .state('tabs.recipes', {
      url: '/recipes',
      views: {
        'recipes-tab': {
          templateUrl: 'templates/recipes.html',
          controller: 'RecipesCtrl',
          resolve: {
            recipes: function(Recipe) {
              return Recipe.getAllRecipes();
            }
          }
        }
      }
    })
    .state('tabs.recipe-details', {
      url: '/recipes/:id',
      views: {
        'recipes-tab': {
          templateUrl: 'templates/recipe-details.html',
          controller: 'RecipeDetailCtrl',
          resolve: {
            recipe: function($stateParams, Recipe) {
              return Recipe.getRecipe($stateParams.id);
            }
          }
        }
      }
    })
    .state('tabs.profile', {
      url: '/profile',
      views: {
        'profile-tab': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl',
          resolve: {
            ingredients: function(Ingredient) {
              return Ingredient.getAllIngredients();
            }
          }
        }
      }
    });


  $urlRouterProvider.otherwise('/sign-in');

});
