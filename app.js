angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test='Hello World!';
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 20},
      {title: 'post 3', upvotes: 8},
      {title: 'post 4', upvotes: 3},
      {title: 'post 5', upvotes: 14}
    ];
    $scope.addPost = function(){
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
    };
}]);


