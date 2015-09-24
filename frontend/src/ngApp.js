window.app = angular.module('adoptionApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl : '/pages/home.html',
      controller : 'mainCtrl'
    })
    .state('postPet', {
      url: '/postPet',
      templateUrl : '/pages/postPet.html',
      controller : 'petCtrl'
    })
    .state('client', {
      url: '/client',
      templateUrl : '/pages/client.html',
      controller : 'clientCtrl'
    })
    .state('adoption', {
      url: '/adoption',
      templateUrl : '/pages/adoption.html',
      controller : 'adoptionCtrl'
    })
    .state('show', {
      url: '/show/:ClientId',
      templateUrl : '/pages/inspectClient.html',
      controller : 'clientCtrl'
    })
});
