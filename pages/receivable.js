app.controller('ReceivableCntlr', function ($scope, $firebaseArray) {
    $scope.title = "Receivable";
    var ref = firebase.database().ref().child('receivables');
    dbReceivables = $scope.comReceivables = $firebaseArray(ref);
});