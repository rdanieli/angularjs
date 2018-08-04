'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl',[ '$scope','$location', 'shoppingService', function ($scope, $location, shoppingService) {
    $scope.products = [{
      id: 1,
      name: 'product1',
      price: 100.0,
      image: ''
    },{
      id: 2,
      name: 'product2',
      price: 14.5,
      image: ''
    },{
      id: 3,
      name: 'product3',
      price: 100.43,
      image: ''
    },{
      id: 4,
      name: 'product4',
      price: 99.9,
      image: ''
    }];

    
    $scope.addItemToCart = function(product) {
      product.count = 1;
      shoppingService.saveState(product);
      $location.path('shopping');
    };
  }]);
