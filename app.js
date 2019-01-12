var app = angular.module('myApp', ['firebase', 'ngRoute', 'angular.filter']);

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
      activetab: 'centers'
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
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/prdinput', {
      templateUrl: 'pages/forms/prd_input.html',
      controller: 'JournalFormCntlr',
      activetab: 'formentry'
    })
    .when('/journal', {
      templateUrl: 'pages/journal.html',
      controller: 'JournalCntlr',
      activetab: 'journal'
    })
    .when('/debitledger', {
      templateUrl: 'pages/ledger/debit.html',
      controller: 'DebitLedgerCntlr',
      activetab: 'ledger'
    })
    .when('/creditledger', {
      templateUrl: 'pages/ledger/credit.html',
      controller: 'CreditLedgerCntlr',
      activetab: 'ledger'
    })
    .when('/expenseledger', {
      templateUrl: 'pages/ledger/expense.html',
      controller: 'DebitLedgerCntlr',
      activetab: 'ledger'
    })
    .when('/debitorledger', {
      templateUrl: 'pages/ledger/debitor.html',
      controller: 'DebitLedgerCntlr',
      activetab: 'ledger'
    })
    .when('/creditorledger', {
      templateUrl: 'pages/ledger/creditor.html',
      controller: 'CreditLedgerCntlr',
      activetab: 'ledger'
    })
    .when('/search', {
      templateUrl: 'pages/user/search.html',
      controller: 'SearchCnt',
      activetab: 'user'
    })
    .when('/newjournal', {
      templateUrl: 'pages/forms/nj.html',
      controller: 'NewJournalCntlr',
      activetab: 'user'
    })
    .when('/reg', {
      templateUrl: 'pages/reg.html',
      controller: 'RegCntlr',
      activetab: 'user'
    })
    .otherwise({ redirectTo: '/' });
});
app.run(function ($rootScope, $location, $route) {
  $rootScope.$route = $route;
  $rootScope.logged = function () {
    if (lsGet('user')) return true;
    else return false;
  }
  $rootScope.userInfo = userInfo;
  $print($rootScope.userInfo);
});
app.controller('LoginCntlr', function ($scope, $firebaseObject) {
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
  var ref = firebase.database().ref().child('costCenters');
  dbCostCenters = $scope.comCostCenters = $firebaseArray(ref);
  $scope.comCostCenters.$loaded().then(function () {
    $scope.load = true;
    if ($scope.comCostCenters.length == 0) {
      $scope.nodata = true;
    }
  });
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
app.controller('JournalFormCntlr', function ($scope, $firebaseArray) {
  lastEntryNo = $scope.lastEntry = $firebaseArray(getRef('lastFormEntry'));
  // $print($scope.lastEntry);
  accArray = $firebaseArray(getRef('accounts'));
  partyArray = [$firebaseArray(getRef('banks'))];
  partyArray.push($firebaseArray(getRef('buyProducts')));
  partyArray.push($firebaseArray(getRef('companyHeads')));
  partyArray.push($firebaseArray(getRef('contractors')));
  partyArray.push($firebaseArray(getRef('employees')));
  partyArray.push($firebaseArray(getRef('paddyDry')));
  partyArray.push($firebaseArray(getRef('paddyRaw')));
  partyArray.push($firebaseArray(getRef('payables')));
  partyArray.push($firebaseArray(getRef('receivables')));
  partyArray.push($firebaseArray(getRef('rice')));
  partyArray.push($firebaseArray(getRef('truckTrackors')));
});
app.controller('JournalCntlr', function ($scope) {
  $scope.title = "Journal";
  $scope.journal = [];
  fsDb.collection("JournalForm").get()
    .then(function (snapshot) {
      snapshot.docs.forEach(element => {
        $scope.journal.push(element.data());
        $scope.$applyAsync();
      });
    })
    .catch(function (err) {
      $print(err);
    });

  $scope.changerDC = function (code) {
    if (code == 'Dr') return 'Debit';
    if (code == 'Cr') return 'Credit';
  }
  $scope.numToDate = numToDateConv;
  $scope.totalDrCr = function (arr, type) {
    var dailyTotal = 0;
    for (i = 0; i < arr.length; i++) {
      if (type == 1) {
        dailyTotal += arr[i].debitCredit[0].drAmount;
      }
      if (type == 2) {
        dailyTotal += arr[i].debitCredit[1].crAmount;
      }
    }
    return dailyTotal;
  }
  $scope.intMk = function (date) {
    return parseInt(date);
  }
});
app.controller('NewJournalCntlr', function ($scope) {
  $scope.title = "New Journal";
  $scope.journal = [];
  fsDb.collection("JournalForm").get()
    .then(function (snapshot) {
      snapshot.docs.forEach(element => {
        $scope.journal.push(element.data());
        $scope.$applyAsync();
      });
    })
    .catch(function (err) {
      $print(err);
    });

  $scope.changerDC = function (code) {
    if (code == 'Dr') return 'Debit';
    if (code == 'Cr') return 'Credit';
  }
  $scope.numToDate = numToDateConv;
  $scope.totalDrCr = function (arr, type) {
    var dailyTotal = 0;
    for (i = 0; i < arr.length; i++) {
      if (type == 1) {
        dailyTotal += arr[i].debitCredit[0].drAmount;
      }
      if (type == 2) {
        dailyTotal += arr[i].debitCredit[1].crAmount;
      }
    }
    return dailyTotal;
  }
  $scope.intMk = function (date) {
    return parseInt(date);
  }
});
app.controller('RegCntlr', function ($scope, $firebaseArray) {
  var ref = getRef('users');
  $scope.title = "Register";
  $scope.load = false;
  $scope.nodata = false;
  $scope.users = $firebaseArray(ref);
  $scope.users.$loaded().then(function () {
    $scope.load = true;
    if ($scope.users.length == 0) {
      $scope.nodata = true;
    }
  });
  $scope.per = [];
  $scope.getPer = function (e) {
    $scope.per = $firebaseArray(getRef('users/' + pId));
  }
  $scope.getCheck = function (id) {
    if ($scope.per.length == 0) return false;
    else {
      for (i = 0; i < $scope.per.length; i++) {
        if ($scope.per[i].$id == id) {
          return $scope.per[i].$value;
        }
      }
    }
  }
  $scope.$applyAsync();
});

app.controller('SearchCnt', function ($scope, $firebaseArray) {
  $scope.searchres = [];
  $scope.searchdata = function (e) {
    $scope.searchres = [];
    let sKey = e.target.value.toLowerCase();
    if (sKey != '') {
      let sRes = $scope.students.find(function (el) {
        return el.first.toLowerCase().includes(sKey) || el.last.toLowerCase().includes(sKey) || el.class.toLowerCase().includes(sKey.toLowerCase()) || el.status.toLowerCase().includes(sKey);
      });
      if (sRes) {
        $scope.searchres.push(sRes);
        $print($scope.searchres);
      }
    }
    else{
      $scope.searchres = [];
    }
    $scope.$applyAsync();
  }
  $scope.students = [
    { first: 'Aguilar', last: 'Alice', class: '1967', status: 'Not Graduated' },
    { first: 'Clark', last: 'Helen', class: '2015', status: 'Graduated' },
  ];
});