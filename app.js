var myapp = angular.module('myapp', []);
myapp.controller('MyCtrl', function($scope){
    $scope.title = "AngularJS training";
    $scope.age = 10;

    $scope.sayHi = function(){
        $scope.title = "modified from controller";
    };

    $scope.students = [
        {
            name: 'Arun',
            department: 'Arts',
            dob: '19-01-1986'
        },
        {
            name: 'Kishore',
            department: 'Finance',
            dob: '20-02-1987'
        },
        {
            name: 'Lily',
            department: 'Commerce',
            dob: '25-10-1987'
        }
    ];

    
    $scope.onStudentSelect = function(student){
        $scope.selectedStudent = student;
    };

});
