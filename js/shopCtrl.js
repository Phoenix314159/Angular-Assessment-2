angular.module('assessment').controller('shopCtrl', function ($scope, shopService) {
    shopService.getData().then(result => {

        $scope.getData = result.data;
    });

});
