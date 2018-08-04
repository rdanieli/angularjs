'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')

.service('shoppingService', ['$rootScope', function () {
    var products = [];

    var service = {
        removeFromStorage: function(product) {
            var index = products.indexOf(product);
            if(index >= 0){
                if(products[index].count > 1){
                    products[index].count = products[index].count - 1;
                } else {
                    products.splice(index, 1);     
                }
            }

            localStorage.cart = angular.toJson(products);
        },

        saveState: function (product) {
            var found = false;
            for(var i = 0; i < products.length; i++) {
                if (products[i].name === product.name) {
                    found = true;
                    products[i].count = products[i].count + 1;
                    break;
                }
            }
            if(!found){
                products.push(product);
            }
            localStorage.cart = angular.toJson(products);
        },

        restoreState: function () {
            products = angular.fromJson(localStorage.cart);
            return products;
        }
    };
    return service;
}]);