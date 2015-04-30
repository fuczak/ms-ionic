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
        return data.data[index];
      })
    }
  }

  return Recipe;
})
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
  }

  return Ingredient;

})
.factory('Auth', function() {

  var ref = new Firebase(FURL);
  var auth = $firebaseAuth(ref);

  var Auth = {
    user: {},
    register: function(user) {
      return auth.$createUser({
        email: user.email,
        password: user.password
      })
      .then(function() {
        return Auth.login(user);
      })
      .then(function(data) {
        return Auth.createProfile(data.uid, user);
      });
    },
    createProfile: function(uid, user) {
      var profile = {
        name: user.name,
        email: user.email
      };
      var profileRef = ref.child('profiles');
      return profileRef.child(uid).set(profile);
    },
    login: function(user) {
      return auth.$authWithPassword({
        email: user.email,
        password: user.password
      });
    },
    logout: function() {
      auth.$unauth();
    }
  };
  //Every time authentication state changes
  auth.$onAuth(function(authData) {
    if (authData) {
      //if authentication data exists, get user profile and attach it to Auth.user object
      angular.copy(authData, Auth.user);
      Auth.user.profile = $firebaseObject(ref.child('profiles').child(authData.uid));
      //if there is no authentication data, clear Auth.user object
    } else {
      if (Auth.user && Auth.user.profile) {
        Auth.user.profile.$destroy();
      }
      angular.copy({}, Auth.user);
    }
  });

  return Auth;

})
