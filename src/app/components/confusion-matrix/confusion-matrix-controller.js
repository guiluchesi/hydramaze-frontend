'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ConfusionMatrixCtrl
 * @description Confusion Matrix Controller.
 */

angular.module('hydramaze')
  .controller('ConfusionMatrixCtrl', function($scope, $timeout) {

    /*
    * Declared scope functions
    */

    /*
    * Declared scope variables
    */

    $scope.classNames = $scope.data["class_names"];
    $scope.matrix = $scope.data["matrix"];

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      console.log("ConfusionMatrixCtrl has been loaded");
    });
    
  });
