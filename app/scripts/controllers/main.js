'use strict';

/**
 * @ngdoc function
 * @name tldrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tldrApp
 */

 app.factory('Post', function ($firebase, FIREBASE_URL) {
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


app.controller('PostsCtrl', function ($scope, Post) {
  $scope.posts = Post.all;

  $scope.post = {postUrl: '', 'title': '', 'explain': '', 'postVotes': 1, 'postFlags': 0};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {postUrl: '', 'title': '', 'explain': '', 'postVotes': 1, 'postFlags': 0};
    });
  };

  $scope.writing = false;
  $scope.finished = false;


 $scope.voteUp = function(post) {
    
      post.postVotes += 1;
       $scope.posts.$save(post);

    };


 $scope.flagIt = function(post) {
    
      post.postFlags += 1;
        $scope.posts.$save(post);

    };


});

   


  

