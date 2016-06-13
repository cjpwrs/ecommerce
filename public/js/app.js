/**
 * Created by cjpowers on 6/13/16.
 */
angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('products', {
                url: '/products',
                templateUrl: "./views/products.html",
                controller: 'productsCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: "./views/admin.html",
                controller: 'adminCtrl'
            })
    })
