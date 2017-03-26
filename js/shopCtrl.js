angular.module('assessment').controller('shopCtrl', function ($scope, shopService) {
     shopService.getData().then(result => {
         console.log(result.data);
         $scope.getData = result.data;
     });

});
