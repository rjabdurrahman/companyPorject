app.controller('AccountCntlr', function ($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('accounts');
    $scope.title = "Account";
    $scope.accounts = accounts;
    lsSetJ('accCodes', $scope.accounts);
    $scope.comAccounts = $firebaseArray(ref);
    // var accs = lsExGJInit('comAccounts', []);
    // var accLength = lsExGJInit('comAccounts', []).length;
    // for (acc in $scope.accounts) {
    //     for (i = 0; i < accLength; i++) {
    //         if (accs[i].nature == $scope.accounts[acc].name) {
    //             $scope.comAccounts.push(accs[i]);
    //         };
    //     }
    // }
});