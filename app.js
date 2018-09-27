var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/login.html',
    controller  : 'HomeCntlr'
  })
  .otherwise({redirectTo: '/'});
});
app.controller('HomeCntlr', function($scope){
    $scope.message = "Home Cntl";
});
