app.controller('AccountCntlr', function ($scope) {
    $scope.accounts = {
        CA: { name: 'Current Asset', min: 100, max: 199 },
        NCA: { name: 'Non-Current Asset', min: 200, max: 299 },
        CL: { name: 'Current Liability', min: 300, max: 399 },
        NCL: { name: 'Non-Current Liability', min: 400, max: 499 },
        EQTY: { name: 'Equity', min: 500, max: 599 },
        EX: { name: 'Experience', min: 600, max: 699 },
        REV: { name: 'Revenue', min: 700, max: 799 },
        WD: { name: 'Withdrawal', min: 800, max: 900 },
        SD: { name : 'Contra Revenue', min: 800, max: 899 },
        COGS: { name : 'Cost of Goods Sold', min: 9, max:  900},
        WIP: {name : 'Production', min: 900, max: 901},
        CN: { name: 'Contra', min: 901, max: 999}
    }
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