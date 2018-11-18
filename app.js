var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/login.html',
      controller: 'LoginCntlr',
      activetab: 'home'
    })
    .when('/account', {
      templateUrl: 'pages/account.html',
      controller: 'AccountCntlr',
      activetab: 'chart'
    })
    .when('/receivable', {
      templateUrl: 'pages/cons.html',
      controller: 'ReceivableCntlr',
      activetab: 'chart'
    })
    .when('/payable', {
      templateUrl: 'pages/cons.html',
      controller: 'PayableCntlr',
      activetab: 'chart'
    })
    .when('/companyheads', {
      templateUrl: 'pages/cons.html',
      controller: 'CompanyHeadsCntlr',
      activetab: 'chart'
    })
    .when('/costcenter', {
      templateUrl: 'pages/cons.html',
      controller: 'CostCenterCntlr',
      activetab: 'chart'
    })
    .when('/trucktractor', {
      templateUrl: 'pages/cons.html',
      controller: 'TruckTractorCntlr',
      activetab: 'chart'
    })
    .when('/employees', {
      templateUrl: 'pages/cons.html',
      controller: 'EmployeesCntlr',
      activetab: 'chart'
    })
    .when('/bank', {
      templateUrl: 'pages/cons.html',
      controller: 'BankCntlr',
      activetab: 'chart'
    })
    .when('/contractors', {
      templateUrl: 'pages/cons.html',
      controller: 'ContractorsCntlr',
      activetab: 'chart'
    })
    .when('/rice', {
      templateUrl: 'pages/cons.html',
      controller: 'RiceCntlr',
      activetab: 'chart'
    })
    .when('/journalform', {
      templateUrl: 'pages/forms/journal_form.html',
      controller: 'JournalFormCntlr',
      activetab: 'journal'
    })
    .when('/purchasereturn', {
      templateUrl: 'pages/cons.html',
      controller: 'JournalFormCntlr',
      activetab: 'journal'
    })
    .otherwise({ redirectTo: '/' });
});
app.run(function ($rootScope, $location, $route) {
  $rootScope.$route = $route;
});
app.controller('LoginCntlr', function ($scope) {
  $scope.message = "Login Cntl";
});
app.controller('PayableCntlr', function ($scope) {
  $scope.comPayables = lsExGJInit('comPayables', []);
});
app.controller('CompanyHeadsCntlr', function ($scope) {
  $scope.comCh = lsExGJInit('comCh', []);
});
app.controller('CostCenterCntlr', function ($scope) {
  $scope.comCostCenters = lsExGJInit('comCostCenters', []);
});
app.controller('TruckTractorCntlr', function ($scope) {
  $scope.comTrs = lsExGJInit('comTrs', []);
});
app.controller('EmployeesCntlr', function ($scope) {
  $scope.comEmps = lsExGJInit('comEmps', []);
});
app.controller('BankCntlr', function ($scope) {
  $scope.comBanks = lsExGJInit('comBanks', []);
});
app.controller('ContractorsCntlr', function ($scope) {
  $scope.comContractors = lsExGJInit('comContractors', []);
});
app.controller('RiceCntlr', function ($scope) {
  $scope.comRices = lsExGJInit('comRices', []);
});
app.controller('JournalFormCntlr', function ($scope) {
  // $scope.accName = function (code) {
  //   return lsExGJInit('comAccounts', []).find(function (el) {
  //     return el.accCode == code;
  //   }).accText;
  // }
});