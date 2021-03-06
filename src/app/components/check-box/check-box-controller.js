'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:CheckBoxCtrl
 * @description CheckBox Controller.
 */

angular.module('hydramaze')
  .controller('CheckBoxCtrl', function($scope, $timeout) {

    /*
    * Declared scope functions
    */

    $scope.$getComponentKey = function() {
      return $scope.id;
    };

    $scope.$getComponentValue = function() {
      return $scope.value;
    };

    $scope.$setupPreviousChoice = function() {
      if ($scope.data["previousValue"] != undefined &&
        $scope.data["previousValue"] != $scope.data["defaultValue"]) {
        $scope.value = $scope.data["previousValue"];
      }
    };

    /*
    * Declared scope variables
    */

    $scope.id = $scope.data["id"];
    $scope.completeDescription = $scope.data["completeDescription"];
    $scope.value = $scope.data["defaultValue"];
    $scope.comboValues = $scope.data["listData"];
    $scope.name = $scope.data["name"];
    $scope.observation = $scope.data["observation"];
    $scope.title = $scope.data["simpleDescription"];

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      $scope.$setupPreviousChoice();

      console.log('check box has been loaded');
    });

  });
