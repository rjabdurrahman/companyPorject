app.controller('AccountCntlr', function ($scope) {
    $scope.accounts = {
        CA: 'Current Asset',
        NCA: 'Non-Current Asset',
        CL: 'Current Liability',
        NCL: 'Non-Current Liability',
        EQTY: 'Equity',
        EX: 'Experience',
        REV: 'Revenue',
        WD: 'Withdrawal',
        SD: 'Contra Revenue',
        COGS: 'Cost of Goods Sold',
        WIP: 'Production',
        CN: 'Contra'
    }
    $scope.comAccounts = [];
    var accs = lsExGJInit('comAccounts', []);
    var accLength = lsExGJInit('comAccounts', []).length;
    for(acc in $scope.accounts){
        for (i = 0; i < accLength; i++) {
            if(accs[i].nature == $scope.accounts[acc]){
                $scope.comAccounts.push(accs[i]);
            };
        }
    }
});