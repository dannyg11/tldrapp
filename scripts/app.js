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
      .when('/register', {
  templateUrl: 'views/register.html',
  controller: 'loginController',
  resolve: {
    user: function(Auth) {
      return Auth.resolveUser();
    }
  }
})
 .when('/login', {
  templateUrl: 'views/login.html',
  controller: 'loginController',
  resolve: {
    user: function(Auth) {
      return Auth.resolveUser();
    }
  }
})     
      .otherwise({
        redirectTo: '/'
      });
  })

  .constant('FIREBASE_URL', 'https://YOUR-FB-APP.firebaseio.com/');



app.directive('href', function() {
  return {
    compile: function(element) {
      element.attr('target', '_blank');
    }
  };
});
