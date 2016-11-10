'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: '/assets/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope','movieDataService', view1Ctrl]);

function view1Ctrl($scope, movieDataService) {
    var that = this;

    $scope.items = []

    for(var i =0 ;i<30;i++){
      $scope.items.push({id:i,label:""+i});
    }

    $scope.userSelect = $scope.items[0];

    movieDataService.getMovieById(1).then(function(ratings) {
        that.topRatedMovies = ratings;
    });

    $scope.loadList=function(item){
       movieDataService.getMovieById(item.id).then(function(ratings) {
          that.topRatedMovies = ratings;
      });
    };
}
