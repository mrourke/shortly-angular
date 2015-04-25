angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getAll().then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.increaseVisits = function(link){
    link.visits++;
  };

  $scope.init = function() {
    $scope.getLinks();
  }();
})

.directive('shortenLink', function() {
  return {
    template: '<a href="/api/links/{{link.code}}"\
               ng-click="increaseVisits(data.links[$index])">{{link.url}}</a>\
               <span class="visits-bar" style="width:{{link.visits * 10}}px">{{link.visits}}</span>'
  }
});
