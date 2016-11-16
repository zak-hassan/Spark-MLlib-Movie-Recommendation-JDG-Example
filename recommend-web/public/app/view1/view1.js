'use strict';

var view1App=angular.module('myApp.view1', ['ngRoute']);

view1App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: '/assets/view1/view1.html',
        controller: 'View1Ctrl'
    });
}]);

view1App.controller('View1Ctrl', ['$scope','movieDataService', view1Ctrl]);

view1App.directive('barchart', function() {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function($scope, element, attrs) {

            var data = $scope[attrs.data],
                xkey = $scope[attrs.xkey],
                ykeys= $scope[attrs.ykeys],
                labels= $scope[attrs.labels];

            Morris.Bar({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels
                });

        }

    };

});



function view1Ctrl($scope ,movieDataService) {
    var that = this;


   $scope.xkey = 'range';

   $scope.ykeys = ['total_tasks'];

   $scope.labels = ['Total Tasks'];

   $scope.myModel = [
     { range: 'Product 1', total_tasks: 1.002  },
     { range: 'Product 2', total_tasks: 0.97  },
     { range: 'Product 3', total_tasks: 0.93  },
     { range: 'Product 4', total_tasks: 0.87  },
     { range: 'Product 5', total_tasks: 0.77  }
    ];



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

        $scope.myModel = []
         var list=[]
          for(var i =0; i<5; i++){
            console.log("looping: "+ratings[i].rating );
            list.push({ range: 'Product 6', total_tasks: ratings[i].rating  });
          }

          console.dir(list);
          $scope.myModel=list;

      });
    };
}
