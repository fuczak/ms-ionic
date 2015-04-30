angular.module('starter.controllers')
  .controller('UserCtrl', function($scope, $state, $ionicModal) {
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
    $scope.test = 'okay';
  });
