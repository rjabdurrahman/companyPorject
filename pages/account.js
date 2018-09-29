app.controller('AccountCntlr', function ($scope) {
    $scope.accounts = {
        CA : 'Current Asset',
        NCA : 'Non-Current Asset',
        CL : 'Current Liability',
        NCL : 'Non-Current Liability',
        EQTY : 'Equity',
        EX : 'Experience',
        REV : 'Revenue',
        WD : 'Withdrawal',
        SD : 'Contra Revenue',
        COGS : 'Cost of Goods Sold',
        WIP : 'Production',
        CN : 'Contra'
    }
    $scope.comAccounts = lsExGJInit('comAccounts', []);
});