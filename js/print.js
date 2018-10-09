var wbook = XLSX.utils.book_new();
wbook.Props = {
    Title: "Company WordBook",
    Subject: "Test",
    Author: "Abdur Rahman",
    CreatedDate: new Date(2018, 09, 18)
};

function printAll() {
    $print('printAll');
    var wsRec = XLSX.utils.json_to_sheet(lsExGJInit('comReceivables', []), { header: ["S", "h", "e", "e_1", "t"] });
    XLSX.utils.book_append_sheet(wbook, wsRec, 'Receivables');
    var wsEmp = XLSX.utils.json_to_sheet(lsExGJInit('comEmps', []), { header: ["S", "h", "e", "e_1", "t"] });
    XLSX.utils.book_append_sheet(wbook, wsEmp, 'Employees');
    var wbookout = XLSX.write(wbook, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    saveAs(new Blob([s2ab(wbookout)], { type: "application/octet-stream" }), 'All.xlsx');
}