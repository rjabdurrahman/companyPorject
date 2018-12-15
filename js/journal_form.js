function findTotal(e) {
    let amountsEl = document.getElementsByName(e.target.name);
    let total = 0;
    for (var amountEl in amountsEl) {
        if (parseFloat(amountsEl[amountEl].value))
            total += parseFloat(amountsEl[amountEl].value);
    }
    if (e.target.name == "debitAmount") {
        $js('totalDebit').textContent = parseFloat(total.toFixed(2));
    }
    else if (e.target.name == "creditAmount") {
        $js('totalCredit').textContent = parseFloat(total.toFixed(2));
    }
    submitValid();
}
var accArray = null;
function ACNameComplete(event) {
    event.target.value = $.trim(event.target.value);
    let data = accArray.find(function (el) {
        return el.accCode == event.target.value;
    });
    // $print(data);
    if (data) {
        event.target.parentElement.nextElementSibling.firstElementChild.value = data.accText;
    }
    else event.target.parentElement.nextElementSibling.firstElementChild.value = '';
}
var partyArray = null;
function partyNameComplete(event) {
    event.target.value = $.trim(event.target.value);
    for (i = 0; i < partyArray.length; i++) {
        for (j = 0; j < partyArray[i].length; j++) {
            if (partyArray[i][j].code == event.target.value) {
                event.target.parentElement.nextElementSibling.firstElementChild.value = partyArray[i][j].name;
                return;
            }
        }
    }
    event.target.parentElement.nextElementSibling.firstElementChild.value = '';
}