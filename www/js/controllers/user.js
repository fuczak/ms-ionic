angular.module('starter.controllers')
  .controller('UserCtrl', function($scope, $state, $ionicModal, $ionicLoading, Auth) {
    $ionicModal.fromTemplateUrl('templates/partials/sign-up.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.skipLogin = function() {
      $state.go('tabs.recipes');
    };
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    $scope.logIn = function (user) {
      if(!!user.email && !!user.password) {
        $ionicLoading.show({
          hodeOnStateChange: true,
          template: 'Signing in...'
        });
        Auth.login(user).then(function() {
          $scope.closeModal();
          $state.go('tabs.recipes');
          $ionicLoading.hide();
        }, function(err) {
          alert(err);
        });
      } else {
        alert('Please fill in all details.');
      }
    };
  });
