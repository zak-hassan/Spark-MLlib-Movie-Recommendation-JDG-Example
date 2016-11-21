(function() {
    angular.module('myApp')
        .factory('movieDataService', ['$http', '$q', movieDataService])

    function movieDataService($http, $q) {
        return {
            getMovieById: getMovieById,
            updateUserList: updateUserList,
            addRating:addRating
        };

        function addRating(user, product, rating){

            var request= $http({
                method:"post",
                url:"/rating/add",
                data:{
                     user: parseInt(user),
                     product: parseInt(rating),
                     rating: parseFloat(rating)
                   }
                });

             return (request.then(function(res) {
                console.dir(res);
                return (res);
            },

            function(response) {
                console.log("error");
            }
          ));

        }

        function getMovieById(i) {
            var request = $http({
                method: "get",
                url: "/movie/user/" + i
            });

            return (request.then(function(res) {
                    console.dir(res);
                    return (res.data.ratings);
                },
                function(response) {
                    console.log("error");
                     $("#alert").show();
                     $('#loadGraph').prop('disabled', true);

                }
            ));
        }



        function updateUserList() {
            console.log();
        }
    }


}());
