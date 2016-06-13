/**
 * Created by cjpowers on 6/13/16.
 */
angular.module('app').controller('adminCtrl', function($scope, adminService, productsService){
    $scope.addProduct = function(name, price, quantity){
        var productObj = {
            "name": name,
            "price": price,
            "quantity": quantity
        }
        adminService.addProduct(productObj)
            .then(function(response){
                console.log(response);
                $scope.getProducts();
            })
    }

    $scope.getProducts = function(){
        productsService.getProducts()
            .then(function(response){
                $scope.products = response.data;
            })
    }

    $scope.updateProduct = function(id, name, price, quantity){
        var newProductObj = {
            "name": name,
            "price": price,
            "quantity": quantity
        }
        adminService.updateProduct(id, newProductObj)
            .then(function(response){
                console.log(response);
                $scope.getProducts();
            })
    }

    $scope.deleteProduct = function(id){
        adminService.deleteProduct(id)
            .then(function(response){
                console.log(response);
                $scope.getProducts();
            })
    }

    $scope.getProducts();
})