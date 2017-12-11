var myapp = angular.module('myapp', []);

myapp.component('myCalculator', {
    templateUrl: 'mycalculator.tpl.html',
    controller: 'MyCalculatorCtrl'
});

myapp.controller('MyCalculatorCtrl', function(){
    this.isCalculated = false;
    
    this.onInputChange = function(){
        this.isCalculated = false;
    };
    
    this.calculate = function(operation){
        var input1 = parseInt(this.input1);
        var input2 = parseInt(this.input2);
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
        this.isCalculated = true;
        this.result = result;        
    };
});

myapp.controller('MyCtrl', function($scope){
    
});
