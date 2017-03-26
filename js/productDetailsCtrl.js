angular.module('assessment').controller('productDetailsCtrl', function ($scope, shopService) {
    shopService.getProductById().then(function (result) {

        $scope.getProductById = result.data;

        // console.log($stateParams);


    })
});
