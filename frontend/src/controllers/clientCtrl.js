app.controller('clientCtrl', function($scope, $http, clientService, $stateParams){
  $scope.submitClient = function(){
    clientService.postClient($scope.client)
    .success(res => {
      $scope.name = res.name;
      $scope.pet = null;
    })
  };

  clientService.showClient($stateParams)
  .success(function(res){
    console.log(res);
  });
});
