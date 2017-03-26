angular.module('assessment').directive('individualProduct', function (shopService) {
    return {
        restrict: 'E',
        templateUrl: './views/product-tmpl.html',
        link: function (scope, elem, attrs) {
            shopService.getData().then(result => {
                scope.getData = result.data;
            });
        }
    }
})
