'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: '/assets/view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
.controller('View2Ctrl', ['$scope','movieDataService',view2Ctrl]);

function view2Ctrl($scope ,movieDataService) {
    $scope.addRating= function(user, product, rating){
        movieDataService.addRating(user,product,rating).then(function(res){
            console.dir(res);
            console.log("persisted successfully");
        });
    };
}