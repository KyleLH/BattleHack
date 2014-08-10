floc.controller('menuController', function($scope) {
    // TODO    
});


floc.controller('HomeController', function($scope, $route, $log, $http) {



    $scope.history = {
    };


    $http({ method: 'GET', url: '/history'}).
        success(function(data) {
            console.dir(data.length);
            $scope.history.list = data;
            $scope.history.position = data.length-1;
        });


    $scope.slider = {
        options: {
            start: function(event, ui) {
                historical = true;
                $log.info('Slider start')
            },
            stop: function(event, ui) {
                console.dir(ui.value);
                if (ui.value === 19) {
                    historical = false;
                } else {
                    var coordinates = $scope.history.list[ui.value].locations;
                    var people = coordinates.map(function(coordinate) {
                        return new google.maps.LatLng(coordinate.latitude, coordinate.longitude)
                    });

                    pointArray.clear();

                    people.forEach(function(person) {
                        pointArray.push(person);
                    });

                    $log.info('Slider stop')
                }


            }
        }
    };
});
