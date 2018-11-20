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
      templateUrl: 'pages/receivable.html',
      controller: 'ReceivableCntlr',
      activetab: 'chart'
    })
    .when('/payable', {
      templateUrl: 'pages/payable.html',
      controller: 'PayableCntlr',
      activetab: 'chart'
    })
    .when('/companyheads', {
      templateUrl: 'pages/company_heads.html',
      controller: 'CompanyHeadsCntlr',
      activetab : 'chart'
    })
    .when('/costcenter', {
      templateUrl: 'pages/cost_center.html',
      controller: 'CostCenterCntlr',
      activetab : 'chart'
    })
    .when('/trucktractor', {
      templateUrl: 'pages/truck_tractor.html',
      controller: 'TruckTractorCntlr',
      activetab : 'chart'
    })
    .when('/employees', {
      templateUrl: 'pages/employees.html',
      controller: 'EmployeesCntlr',
      activetab : 'chart'
    })
    .when('/bank', {
      templateUrl: 'pages/bank.html',
      controller: 'BankCntlr',
      activetab : 'chart'
    })
    .when('/contractors', {
      templateUrl: 'pages/contractors.html',
      controller: 'ContractorsCntlr',
      activetab : 'chart'
    })
    .when('/paddyraw', {
      templateUrl: 'pages/paddy_raw.html',
      controller: 'PaddyRawCntlr',
      activetab : 'chart'
    })
    .when('/paddydry', {
      templateUrl: 'pages/paddy_dry.html',
      controller: 'PaddyDryCntlr',
      activetab : 'chart'
    })
    .when('/rice', {
      templateUrl: 'pages/rice.html',
      controller: 'RiceCntlr',
      activetab : 'chart'
    })
    .when('/byproducts', {
      templateUrl: 'pages/by_products.html',
      controller: 'ByProductsCntlr',
      activetab : 'chart'
    })
    .when('/journalform', {
      templateUrl: 'pages/forms/journal_form.html',
      controller: 'JournalFormCntlr',
      activetab: 'journal'
    })
    .when('/purchase', {
      templateUrl: 'pages/forms/purchase.html',
      controller: 'JournalFormCntlr',
      activetab: 'journal'
    })
    .when('/purchasereturn', {
      templateUrl: 'pages/forms/purchase_return.html',
      controller: 'JournalFormCntlr',
      activetab: 'journal'
    })
    .when('/sales', {
      templateUrl: 'pages/forms/sales.html',
      controller: 'JournalFormCntlr',
      activetab: 'journal'
    })
    .when('/salesreturn', {
      templateUrl: 'pages/forms/sales_return.html',
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
  $scope.title = "Payable";
  $scope.comPayables = lsExGJInit('comPayables', []);
});
app.controller('CompanyHeadsCntlr', function ($scope) {
  $scope.title = "Company Head";
  $scope.comCh = lsExGJInit('comCh', []);
});
app.controller('CostCenterCntlr', function ($scope) {
  $scope.title = "Cost Center";
  $scope.comCostCenters = lsExGJInit('comCostCenters', []);
});
app.controller('TruckTractorCntlr', function ($scope) {
  $scope.title = "Truck Tractor";
  $scope.comTrs = lsExGJInit('comTrs', []);
});
app.controller('EmployeesCntlr', function ($scope) {
  $scope.title = "Employee";
  $scope.comEmps = lsExGJInit('comEmps', []);
});
app.controller('BankCntlr', function ($scope) {
  $scope.title = "Bank";
  $scope.comBanks = lsExGJInit('comBanks', []);
});
app.controller('ContractorsCntlr', function ($scope) {
  $scope.title = "Contractor";
  $scope.comContractors = lsExGJInit('comContractors', []);
});
app.controller('PaddyRawCntlr', function ($scope) {
  $scope.title = "Paddy Raw";
  $scope.comPaddyRaws = lsExGJInit('comPaddyRaws', []);
});
app.controller('PaddyDryCntlr', function ($scope) {
  $scope.title = "Paddy Dry";
  $scope.comPaddyDrys = lsExGJInit('comPaddyDrys', []);
});
app.controller('RiceCntlr', function ($scope) {
  $scope.title = "Rice";
  $scope.comRices = lsExGJInit('comRices', []);
});
app.controller('ByProductsCntlr', function ($scope) {
  $scope.title = "By Product";
  $scope.comByProducts = lsExGJInit('comByProducts', []);
});
app.controller('JournalFormCntlr', function ($scope) {
  // $scope.accName = function (code) {
  //   return lsExGJInit('comAccounts', []).find(function (el) {
  //     return el.accCode == code;
  //   }).accText;
  // }
});