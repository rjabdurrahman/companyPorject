var app = angular.module('myApp', ['firebase', 'ngRoute']);

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
      activetab: 'chart'
    })
    .when('/costcenter', {
      templateUrl: 'pages/cost_center.html',
      controller: 'CostCenterCntlr',
      activetab: 'costcenter'
    })
    .when('/trucktractor', {
      templateUrl: 'pages/truck_tractor.html',
      controller: 'TruckTractorCntlr',
      activetab: 'chart'
    })
    .when('/employees', {
      templateUrl: 'pages/employees.html',
      controller: 'EmployeesCntlr',
      activetab: 'chart'
    })
    .when('/bank', {
      templateUrl: 'pages/bank.html',
      controller: 'BankCntlr',
      activetab: 'chart'
    })
    .when('/contractors', {
      templateUrl: 'pages/contractors.html',
      controller: 'ContractorsCntlr',
      activetab: 'chart'
    })
    .when('/paddyraw', {
      templateUrl: 'pages/paddy_raw.html',
      controller: 'PaddyRawCntlr',
      activetab: 'chart'
    })
    .when('/paddydry', {
      templateUrl: 'pages/paddy_dry.html',
      controller: 'PaddyDryCntlr',
      activetab: 'chart'
    })
    .when('/rice', {
      templateUrl: 'pages/rice.html',
      controller: 'RiceCntlr',
      activetab: 'chart'
    })
    .when('/buyproducts', {
      templateUrl: 'pages/by_products.html',
      controller: 'ByProductsCntlr',
      activetab: 'chart'
    })
    .when('/journalform', {
      templateUrl: 'pages/forms/journal_form.html',
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/purchase', {
      templateUrl: 'pages/forms/purchase.html',
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/purchasereturn', {
      templateUrl: 'pages/forms/purchase_return.html',
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/sales', {
      templateUrl: 'pages/forms/sales.html',
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/salesreturn', {
      templateUrl: 'pages/forms/sales_return.html',
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/prdoutput', {
      templateUrl: 'pages/forms/prd_output.html',
      controller: 'PrdOutputCntlr',
      activetab: 'formentry'
    })
    .when('/journal', {
      templateUrl: 'pages/journal.html',
      controller: 'JournalCntlr',
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
app.controller('PayableCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Payable";
  var ref = firebase.database().ref().child('payables');
  dbPayables = $scope.comPayables = $firebaseArray(ref);
  $scope.comPayables.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comPayables.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('CompanyHeadsCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Company Head";
  var ref = firebase.database().ref().child('companyHeads');
  dbCh = $scope.comCh = $firebaseArray(ref);
  $scope.comCh.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comCh.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('CostCenterCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Cost Center";
  $scope.comCostCenters = lsExGJInit('comCostCenters', []);
});
app.controller('TruckTractorCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Truck Tractor";
  var ref = firebase.database().ref().child('truckTrackors');
  dbTrs = $scope.comTrs = $firebaseArray(ref);
  $scope.comTrs.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comTrs.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('EmployeesCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Employee";
  $scope.comEmps = lsExGJInit('comEmps', []);
  var ref = firebase.database().ref().child('employees');
  dbEmps = $scope.comEmps = $firebaseArray(ref);
  $scope.comEmps.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comEmps.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('BankCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Bank";
  var ref = firebase.database().ref().child('banks');
  dbBanks = $scope.comBanks = $firebaseArray(ref);
  $scope.comBanks.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comBanks.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('ContractorsCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Contractor";
  var ref = firebase.database().ref().child('contractors');
  dbContractors = $scope.comContractors = $firebaseArray(ref);
  $scope.comContractors.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comContractors.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('PaddyRawCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Paddy Raw";
  var ref = firebase.database().ref().child('paddyRaw');
  dbPaddyRaws = $scope.comPaddyRaws = $firebaseArray(ref);
  $scope.comPaddyRaws.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comPaddyRaws.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('PaddyDryCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Paddy Dry";
  $scope.comPaddyDrys = lsExGJInit('comPaddyDrys', []);
  var ref = firebase.database().ref().child('paddyDry');
  dbPaddyDrys = $scope.comPaddyDrys = $firebaseArray(ref);
  $scope.comPaddyDrys.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comPaddyDrys.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('RiceCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Rice";
  var ref = firebase.database().ref().child('rice');
  dbRices = $scope.comRices = $firebaseArray(ref);
  $scope.comRices.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comRices.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('ByProductsCntlr', function ($scope, $firebaseArray) {
  $scope.title = "Buy Product";
  var ref = firebase.database().ref().child('buyProducts');
  dbByProducts = $scope.comByProducts = $firebaseArray(ref);
  $scope.comByProducts.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comByProducts.length == 0) {
      $scope.nodata = true;
    }
  });
});
app.controller('JournalFormCntlr', function ($scope) {
  // $scope.accName = function (code) {
  //   return lsExGJInit('comAccounts', []).find(function (el) {
  //     return el.accCode == code;
  //   }).accText;
  // }
});
app.controller('PrdOutputCntlr', function ($scope) {
  $scope.title = "Product Output";
});
app.controller('JournalCntlr', function ($scope) {
  $scope.title = "Journal";
  $scope.journal = [...lsExGJInit('journalForm', []), ...lsExGJInit('purchaseForm', []), ...lsExGJInit('purchaseReturnForm', []), ...lsExGJInit('salesForm', []), ...lsExGJInit('salesReturnForm', [])];
});