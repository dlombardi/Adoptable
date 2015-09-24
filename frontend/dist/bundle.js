/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./ngApp.js */ 1);
	
	__webpack_require__(/*! ./services/clientService.js */ 6);
	
	__webpack_require__(/*! ./services/petService.js */ 7);
	
	__webpack_require__(/*! ./controllers/mainCtrl.js */ 2);
	
	__webpack_require__(/*! ./controllers/adoptionCtrl.js */ 3);
	
	__webpack_require__(/*! ./controllers/petCtrl.js */ 4);
	
	__webpack_require__(/*! ./controllers/clientCtrl.js */ 5);

/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/ngApp.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module('adoptionApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: '/pages/home.html',
	    controller: 'mainCtrl'
	  }).state('postPet', {
	    url: '/postPet',
	    templateUrl: '/pages/postPet.html',
	    controller: 'petCtrl'
	  }).state('client', {
	    url: '/client',
	    templateUrl: '/pages/client.html',
	    controller: 'clientCtrl'
	  }).state('adoption', {
	    url: '/adoption',
	    templateUrl: '/pages/adoption.html',
	    controller: 'adoptionCtrl'
	  }).state('show', {
	    url: '/show/:ClientId',
	    templateUrl: '/pages/inspectClient.html',
	    controller: 'clientCtrl'
	  });
	});

/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./src/controllers/mainCtrl.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('mainCtrl', function ($scope, $http) {});

/***/ },
/* 3 */
/*!*****************************************!*\
  !*** ./src/controllers/adoptionCtrl.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('adoptionCtrl', function ($scope, $http, petService, clientService) {
	  petService.getPets().success(function (res) {
	    console.log(res);
	    $scope.pets = res;
	  });
	  clientService.getClients().success(function (res) {
	    console.log(res);
	    $scope.clients = res;
	  });
	
	  // $scope.inspectClient = function(client){
	  //   $scope.currentClient = client;
	  // }
	});

/***/ },
/* 4 */
/*!************************************!*\
  !*** ./src/controllers/petCtrl.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	app.controller('petCtrl', function ($scope, $http, petService) {
	  $scope.submitPet = function () {
	    petService.postPet($scope.pet).success(function (res) {
	      $scope.name = res.name;
	    });
	  };
	
	  petService.getPets().success(function (res) {
	    console.log(res);
	    $scope.pets = res;
	  });
	});

/***/ },
/* 5 */
/*!***************************************!*\
  !*** ./src/controllers/clientCtrl.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('clientCtrl', function ($scope, $http, clientService, $stateParams) {
	  $scope.submitClient = function () {
	    clientService.postClient($scope.client).success(function (res) {
	      $scope.name = res.name;
	      $scope.pet = null;
	    });
	  };
	
	  clientService.showClient($stateParams).success(function (res) {
	    console.log(res);
	  });
	});

/***/ },
/* 6 */
/*!***************************************!*\
  !*** ./src/services/clientService.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.service("clientService", function ($state, $http, $stateParams) {
	  this.getClients = function () {
	    return $http.get('http://localhost:3000/clients');
	  };
	  this.postClient = function (client) {
	    return $http.post('http://localhost:3000/clients', client);
	  };
	
	  this.showClient = function (Params) {
	    var ClientId = Params.ClientId;
	    return $http.get('http://localhost:3000/clients/' + ClientId);
	  };
	});

/***/ },
/* 7 */
/*!************************************!*\
  !*** ./src/services/petService.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	app.service("petService", function ($state, $http) {
	  this.getPets = function () {
	    return $http.get('http://localhost:3000/pets');
	  };
	  this.postPet = function (pet) {
	    return $http.post('http://localhost:3000/pets', pet);
	  };
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map