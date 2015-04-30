angular.module('starter.services')
  .factory('Recipe', function(FURL, Auth, $firebaseArray, $firebaseObject) {

    var ref = new Firebase(FURL);

    var Recipe = {
      getAllRecipes: $firebaseArray(ref.child('default_recipes')),
      getRecipe: function(id) {
        return $firebaseObject(ref.child('default_recipes').child(id)).$loaded();
      },
      addRecipe: function(recipe, user) {
        recipe.author = user.profile;
        return $firebaseArray(ref.child('user_recipes').child(user.uid)).$add(recipe);
      }
    };

    return Recipe;

  });
