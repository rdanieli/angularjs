'use strict';

angular.module('testApp')
  .controller('ShoppingCtrl',[ '$scope', 'shoppingService', function ($scope, shoppingService) {
      $scope.cart = shoppingService.restoreState();
      $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.cart.length; i++){
            var product = $scope.cart[i];
            total += (product.price * product.count);
        }
        return total;
      };
      $scope.removeItemCart = function(product){
        shoppingService.removeFromStorage(product);
      };
  }]);
