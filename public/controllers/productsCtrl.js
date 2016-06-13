/**
 * Created by cjpowers on 6/13/16.
 */
angular.module('app').controller('productsCtrl', function($scope, productsService){
    $scope.getProducts = function(){
        productsService.getProducts()
            .then(function(response){
                $scope.products = response.data;
            })
    }
    
    $scope.getProducts();
})