app.controller('AccountCntlr', function ($scope) {
    $scope.accounts = accounts;
    lsSetJ('accCodes', $scope.accounts);
    $scope.comAccounts = [];
    var accs = lsExGJInit('comAccounts', []);
    var accLength = lsExGJInit('comAccounts', []).length;
    for (acc in $scope.accounts) {
        for (i = 0; i < accLength; i++) {
            if (accs[i].nature == $scope.accounts[acc].name) {
                $scope.comAccounts.push(accs[i]);
            };
        }
    }
});