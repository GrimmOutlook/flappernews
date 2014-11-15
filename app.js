angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
      });

  $urlRouterProvider.otherwise('home');
  }])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])
.state('posts', {
  url: '/posts/{id}',
  templateUrl: 'posts.html',
  controller: 'PostsCtrl'
});

.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
    $scope.posts = posts.posts;
    $scope.addPost = function(){
      if($scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Surfer Joe', body: 'Gnarly post, dude!', upvotes: 0},
          {author: 'Keaunu Reeves', body: 'Whoa!', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
}]);
.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){

}]);











