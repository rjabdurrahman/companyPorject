app.controller('DebitLedgerCntlr', function ($scope, $firebaseArray) {
    $scope.title = "Debit Ledger";
    $scope.numToDate = numToDateConv;
    $scope.recShow = false;
    $scope.begBalance = $firebaseArray(getRef('begBalance'));
    accArrayA = $firebaseArray(getRef('accounts'));
    $scope.debitTaker = function (e) {
        let name = e.target.parentElement.previousElementSibling.lastElementChild;
        let code = name.parentElement.previousElementSibling.lastElementChild;
        let dateTo = code.parentElement.previousElementSibling.lastElementChild;
        let dateFrom = dateTo.parentElement.previousElementSibling.lastElementChild;
        $print(name);

        if (dateFrom.value == "") {
            $('#notification').html("<h6>Input Date From</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
            dateFrom.focus();
            return;
        }
        else if (!(dateFrom.value).match(dateEx)) {
            $('#notification').html("<h6>Date From Format Invalid</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
            dateFrom.focus();
            return;
        }
        else if (dateTo.value == "") {
            $('#notification').html("<h6>Input Date To</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
            dateTo.focus();
            return;
        }
        else if (!(dateTo.value).match(dateEx)) {
            $('#notification').html("<h6>Date To Format Invalid</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
            dateTo.focus();
            return;
        }
        else if (code.value == "") {
            $('#notification').html("<h6>Input Account Code</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
            code.focus();
            return;
        }
        else if (name.value == "") {
            $('#notification').html("<h6>Account Code Invalid</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
            code.focus();
            return;
        }

        $print(dateToNum(dateTo.value));
        $print(dateToNum(dateFrom.value));
        $scope.records = [];
        fsDb.collection("JournalForm").where('dACCodes', 'array-contains', code.value).where("date", ">=", dateToNum(dateFrom.value)).where("date", "<=", dateToNum(dateTo.value)).get()
            .then(function (snapshot) {
                snapshot.docs.forEach(element => {
                    $scope.records.push(element.data());
                    $scope.$applyAsync();
                    $scope.recShow = true;
                    $print($scope.records);
                });
            })
            .catch(function (err) {
                $print(err);
            });
    }
    // Debit Taker End
    $scope.total = function (arr, index) {
        if (index == -1) return;
        let total = 0;
        for (i = 0; i <= index; i++) {
            total += arr[i].debitCredit[0].drAmount;
        }
        return total;
    }
});