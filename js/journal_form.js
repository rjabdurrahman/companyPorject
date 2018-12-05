var accArray = null;
function ACNameComplete(event) {
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