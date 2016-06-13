/**
 * Created by cjpowers on 6/13/16.
 */
angular.module('app').service('productsService', function ($http) {
    this.getProducts = function(){
        return $http.get('http://localhost:3000/api/products/');
    }
})