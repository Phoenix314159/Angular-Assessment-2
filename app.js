angular.module('assessment',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                 controller: 'shopCtrl'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: './views/blog.html'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: './views/shop.html',
                controller: 'shopCtrl'
            })
            .state('productdetails',{
                url: '/productdetails/:id',
                templateUrl: './views/product-details.html',
                controller: 'productDetailsCtrl'
            })
        $urlRouterProvider
            .otherwise('/');
    });



