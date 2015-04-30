angular.module('starter.services')
  .factory('Ingredient', function($http) {

    var Ingredient = {
      getAllIngredients: function() {
        return $http.get('js/database/ingredients.json')
          .success(function(data) {
            return data;
          })
          .error(function(err) {
            return err;
          });
      }
    };

    return Ingredient;

  });
