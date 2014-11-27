'use strict';

/**
 * @ngdoc overview
 * @name tldrApp
 * @description
 * # tldrApp
 *
 * Main module of the application.
 */
var app = angular
  .module('tldrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .constant('FIREBASE_URL', 'https://YOUR-FIREBASE-App.firebaseio.com/');



app.directive('href', function() {
  return {
    compile: function(element) {
      element.attr('target', '_blank');
    }
  };
});
