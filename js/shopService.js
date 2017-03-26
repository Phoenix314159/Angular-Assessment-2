angular.module('assessment').service('shopService', function ($http, $stateParams) {
    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        })
    }
    this.getProductById = function () {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + $stateParams.id
        })
    }
});

