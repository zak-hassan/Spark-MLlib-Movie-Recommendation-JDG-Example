'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: '/assets/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['movieDataService', view1Ctrl]);

function view1Ctrl(movieDataService) {
    var that = this;
    movieDataService.getMovieById(1).then(function(ratings) {
        that.topRatedMovies = ratings;
    });
}
