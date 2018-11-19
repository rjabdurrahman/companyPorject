app.controller('ReceivableCntlr', function($scope){
    $scope.title = "Receivable";
    $scope.comReceivables = lsExGJInit('comReceivables', []);
});