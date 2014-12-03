'use strict';

/**
 * @ngdoc function
 * @name tldrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tldrApp
 */

 app.factory('Post', function ($firebase, FIREBASE_URL, Auth) {
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();

    var Post = {
    all: posts,
    create: function (post) {
      return posts.$add(post);
    },
    get: function (postId) {
      return $firebase(ref.child('posts').child(postId)).$asObject();
    }
  };

  return Post;
});


app.controller('PostsCtrl', function ($scope, Post, Auth) {
  $scope.posts = Post.all;

  $scope.post = {postUrl: '', 'title': '', 'explain': '', 'poster': Auth.user.email};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {postUrl: '', 'title': '', 'explain': '', 'poster': Auth.user.email};
    });
  };

  $scope.writing = false;
  $scope.finished = false;


    $scope.signedIn = Auth.signedIn;
    $scope.logout = Auth.logout;


});





  

