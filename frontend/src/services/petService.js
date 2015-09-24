'use strict';

app.service("petService", function($state, $http) {
  this.getPets = function(){
    return $http.get('http://localhost:3000/pets')
  }
  this.postPet = function(pet){
    return $http.post('http://localhost:3000/pets', pet);
  }
});
