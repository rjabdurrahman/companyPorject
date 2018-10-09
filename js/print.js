var wbook = XLSX.utils.book_new();
wbook.Props = {
    Title: "Company WordBook",
    Subject: "Test",
    Author: "Abdur Rahman",
    CreatedDate: new Date(2018, 09, 18)
};

function printAll() {
    $print('printAll');
    var accounts = {
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
    var comAccounts = [];
    var accs = lsExGJInit('comAccounts', []);
    var accLength = lsExGJInit('comAccounts', []).length;
    for (acc in accounts) {
        for (i = 0; i < accLength; i++) {
            if (accs[i].nature == accounts[acc]) {
                comAccounts.push(accs[i]);
            };
        }
    }
    var wsAcc = XLSX.utils.json_to_sheet(comAccounts);
    XLSX.utils.book_append_sheet(wbook, wsAcc, 'Accounts');
    var wsRec = XLSX.utils.json_to_sheet(lsExGJInit('comReceivables', []));
    XLSX.utils.book_append_sheet(wbook, wsRec, 'Receivables');
    var wsPay = XLSX.utils.json_to_sheet(lsExGJInit('comPayables', []));
    XLSX.utils.book_append_sheet(wbook, wsPay, 'Payables');
    var wsCh = XLSX.utils.json_to_sheet(lsExGJInit('comCh', []));
    XLSX.utils.book_append_sheet(wbook, wsCh, 'Company Heads');
    var wsCostCenter = XLSX.utils.json_to_sheet(lsExGJInit('comCostCenters', []));
    XLSX.utils.book_append_sheet(wbook, wsCostCenter, 'Cost Center');
    var wsTruck = XLSX.utils.json_to_sheet(lsExGJInit('comTrs', []));
    XLSX.utils.book_append_sheet(wbook, wsTruck, 'Truck and Tractor');
    var wsEmp = XLSX.utils.json_to_sheet(lsExGJInit('comEmps', []));
    XLSX.utils.book_append_sheet(wbook, wsEmp, 'Employees');
    var wsBank = XLSX.utils.json_to_sheet(lsExGJInit('comBanks', []));
    XLSX.utils.book_append_sheet(wbook, wsBank, 'Banks');
    var wsContractor = XLSX.utils.json_to_sheet(lsExGJInit('comContractors', []));
    XLSX.utils.book_append_sheet(wbook, wsContractor, 'Contractors');
    var wsRice = XLSX.utils.json_to_sheet(lsExGJInit('comRices', []));
    XLSX.utils.book_append_sheet(wbook, wsRice, 'Rice');
    var wbookout = XLSX.write(wbook, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    saveAs(new Blob([s2ab(wbookout)], { type: "application/octet-stream" }), 'All.xlsx');
}