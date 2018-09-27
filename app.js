var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/login.html',
    controller  : 'LoginCntlr'
  })
  .when('/account', {
    templateUrl : 'pages/account.html',
    controller  : 'AccountCntlr'
  })
  .otherwise({redirectTo: '/'});
});
app.controller('LoginCntlr', function($scope){
    $scope.message = "Login Cntl";
});
