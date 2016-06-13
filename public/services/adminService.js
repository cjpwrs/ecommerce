/**
 * Created by cjpowers on 6/13/16.
 */
angular.module('app').service('adminService', function($http){
    this.addProduct = function(productObj){
        return $http({
            method: 'post',
            url: '/api/products/',
            data: productObj
        })
    }

    this.updateProduct = function(productId, newObj){
        return $http({
            method: 'put',
            url: '/api/products/' + productId,
            data: newObj
        })
    }

    this.deleteProduct = function(productId){
        return $http({
            method: 'delete',
            url: '/api/products/' + productId
        })
    }
})