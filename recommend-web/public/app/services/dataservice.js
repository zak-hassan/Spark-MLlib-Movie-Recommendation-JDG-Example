(function() {
    angular.module('myApp')
        .factory('movieDataService', ['$http', '$q', movieDataService])

    function movieDataService($http, $q) {
        return {
            getMovieById: getMovieById,
            updateUserList: updateUserList
        };

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
                }
            ));
        }



        function updateUserList() {
            console.log();
        }
    }


}());
