angular.module('starter.services', [])
.factory('Recipe', function($http) {

  var Recipe = {
    getAllRecipes: function() {
      return $http.get('js/database/recipes.json')
        .success(function(data) {
          return data;
        })
        .error(function(err) {
          return err;
        });
    },
    getRecipe: function(index) {
      return this.getAllRecipes().then(function(data) {
        return data.data[index]
      })
    }
  }
  return Recipe;
})