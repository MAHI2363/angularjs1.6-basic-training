var myapp = angular.module('myapp', []);
myapp.controller('MyCtrl', function($scope){
    
    $scope.calculate = function(operation){
        var input1 = parseInt($scope.input1);
        var input2 = parseInt($scope.input2);
        var result;
        switch(operation) {
            case 'add':
                result = input1 + input2;
            break;
            case 'sub':
                result = input1 - input2;
            break;
            case 'mul':
                result = input1 * input2;
            break;
            default:
                result = input1 / input2;
            break;
        }
        $scope.result = result;
    };
});
