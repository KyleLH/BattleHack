floc.controller('menuController', function ($scope) {
    // TODO    
});


floc.controller('HomeController', function($scope, $route) {

    $scope.history = {
        position: 0,
        list: [1,2,3]
    };

});

floc.controller('createDealController', function ($scope) {
  console.log("testing");
  $scope.createDeal = function () {
    // $http.post("/deals", { address: $scope.newAddress, deal: $scope.newDeal, description: $scope.newDescription });
    $scope.newAddress = '';
    $scope.newDeal = '';
    $scope.newDescription = '';
    console.log("done");
  };

  $scope.clearDeal = function () {
    $scope.newAddress = '';
    $scope.newDeal = '';
    $scope.newDescription = '';
  };
});
