'use strict';
app.controller('petCtrl', function($scope, $http, petService){
  $scope.submitPet = function(){
    petService.postPet($scope.pet)
    .success(res => {
      $scope.name = res.name;
    });
  };

  petService.getPets()
  .success(res => {
    console.log(res);
    $scope.pets = res;
  });
});
