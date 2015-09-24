app.controller('adoptionCtrl', function($scope, $http, petService, clientService){
    petService.getPets()
    .success(res => {
      console.log(res);
      $scope.pets = res;
    });
    clientService.getClients()
    .success(res => {
      console.log(res);
      $scope.clients = res;
    });

    // $scope.inspectClient = function(client){
    //   $scope.currentClient = client;
    // }
});
