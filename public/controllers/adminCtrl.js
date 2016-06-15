/**
 * Created by cjpowers on 6/13/16.
 */
angular.module('app').controller('adminCtrl', function($scope, adminService, productsService){
    $scope.addProduct = function(title, description, price, image){
        var productObj = {
            "title": title,
            "description": description,
            "price": price,
            "image": image
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

    $scope.updateProduct = function(id, title, description, price, image){
        var newProductObj = {
            "title": title,
            "description": description,
            "price": price,
            "image": image
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