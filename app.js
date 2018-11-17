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
  .when('/receivable', {
    templateUrl : 'pages/receivable.html',
    controller  : 'ReceivableCntlr'
  })
  .when('/payable', {
    templateUrl : 'pages/payable.html',
    controller  : 'PayableCntlr'
  })
  .when('/companyheads', {
    templateUrl : 'pages/company_heads.html',
    controller  : 'CompanyHeadsCntlr'
  })
  .when('/costcenter', {
    templateUrl : 'pages/cost_center.html',
    controller  : 'CostCenterCntlr'
  })
  .when('/trucktractor', {
    templateUrl : 'pages/truck_tractor.html',
    controller  : 'TruckTractorCntlr'
  })
  .when('/employees', {
    templateUrl : 'pages/employees.html',
    controller  : 'EmployeesCntlr'
  })
  .when('/bank', {
    templateUrl : 'pages/bank.html',
    controller  : 'BankCntlr'
  })
  .when('/contractors', {
    templateUrl : 'pages/contractors.html',
    controller  : 'ContractorsCntlr'
  })
  .when('/rice', {
    templateUrl : 'pages/rice.html',
    controller  : 'RiceCntlr'
  })
  .when('/journalform', {
    templateUrl : 'pages/forms/journal_form.html',
    controller  : 'JournalFormCntlr'
  })
  .otherwise({redirectTo: '/'});
});
app.controller('LoginCntlr', function($scope){
    $scope.message = "Login Cntl";
});
app.controller('PayableCntlr', function($scope){
  $scope.comPayables = lsExGJInit('comPayables', []);
});
app.controller('CompanyHeadsCntlr', function($scope){
  $scope.comCh = lsExGJInit('comCh', []);
});
app.controller('CostCenterCntlr', function($scope){
  $scope.comCostCenters = lsExGJInit('comCostCenters', []);
});
app.controller('TruckTractorCntlr', function($scope){
  $scope.comTrs = lsExGJInit('comTrs', []);
});
app.controller('EmployeesCntlr', function($scope){
  $scope.comEmps = lsExGJInit('comEmps', []);
});
app.controller('BankCntlr', function($scope){
  $scope.comBanks = lsExGJInit('comBanks', []);
});
app.controller('ContractorsCntlr', function($scope){
  $scope.comContractors = lsExGJInit('comContractors', []);
});
app.controller('RiceCntlr', function($scope){
  $scope.comRices = lsExGJInit('comRices', []);
});
app.controller('JournalFormCntlr', function($scope){
  $scope.accName = function(code){
    return code;
  }
});