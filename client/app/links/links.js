angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getAll().then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.init = function() {
    $scope.getLinks();
  }();
})

.directive('shortenLink', function() {
  return {
    template: '<a href="/api/links/{{link.code}}">{{link.url}}</a>\
               <span class="visits-bar" style="width:{{link.visits * 10}}px">{{link.visits}}</span>'
  }
});
