'use strict';

app.service("clientService", function($state, $http, $stateParams) {
  this.getClients = function(){
    return $http.get('http://localhost:3000/clients');
  }
  this.postClient = function(client){
    return $http.post('http://localhost:3000/clients', client);
  }

  this.showClient = function(Params){
    var ClientId = Params.ClientId;
    return $http.get('http://localhost:3000/clients/' + ClientId);
  }
});
