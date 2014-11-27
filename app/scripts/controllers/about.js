'use strict';

/**
 * @ngdoc function
 * @name tldrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tldrApp
 */
angular.module('tldrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
