angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.url = '';

  $scope.link = {
    url: $scope.url
  };

  $scope.addLink = function(link) {
    var temp = $scope.url;
    link.url = temp;
    $scope.url = '';
    Links.createLink(link);
  };
});
