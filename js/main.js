function $print(data) {
    console.log(data);
}

function $js(id) {
    return document.getElementById(id);
}

function lsSet(vname, data) {
    localStorage.setItem(vname, data);
}

function lsSetJ(vname, data) {
    localStorage.setItem(vname, JSON.stringify(data));
}

function lsGet(vname) {
    return localStorage.getItem(vname);
}

function lsGetJ(vname) {
    return JSON.parse(localStorage.getItem(vname));
}

function lsExGJInit(vname, data) {
    return lsGet(vname) ? lsGetJ(vname) : data;
}

function createNum(data) {
    return data == "" ? 0 : parseFloat(data);
}

function $html(tag, atts, text) {
    var node = document.createElement(tag);
    if (text)
        node.textContent = text;
    for (att in atts) {
        node.setAttribute(att, atts[att]);
    }
    return node;
}

function numValidate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Company Accounts
var accounts = {
    CA: { name: 'Current Asset', min: 100, max: 199 },
    NCA: { name: 'Non-Current Asset', min: 200, max: 299 },
    CL: { name: 'Current Liability', min: 300, max: 399 },
    NCL: { name: 'Non-Current Liability', min: 400, max: 499 },
    EQTY: { name: 'Equity', min: 500, max: 599 },
    EX: { name: 'Experience', min: 600, max: 699 },
    REV: { name: 'Revenue', min: 700, max: 799 },
    WD: { name: 'Withdrawal', min: 800, max: 900 },
    SD: { name: 'Contra Revenue', min: 800, max: 899 },
    COGS: { name: 'Cost of Goods Sold', min: 9, max: 900 },
    WIP: { name: 'Production', min: 900, max: 901 },
    CN: { name: 'Contra', min: 901, max: 999 }
}

// Account Codes for Suggesitions
var accountCodes = [];
lsExGJInit('comAccounts', []).forEach(element => {
    accountCodes.push(element.accCode);
});

var wb = XLSX.utils.book_new();
wb.Props = {
    Title: "Company WordBook",
    Subject: "Test",
    Author: "Abdur Rahman",
    CreatedDate: new Date(2018, 09, 18)
};
// wb.SheetNames.push("Test Sheet");
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

// var config = {
//     apiKey: "AIzaSyC5pbKSkg-q4yA_2SX0bMZ8fuZoOaOWrrE",
//     authDomain: "resultmanagement-f2d68.firebaseapp.com",
//     databaseURL: "https://resultmanagement-f2d68.firebaseio.com",
//     projectId: "resultmanagement-f2d68",
//     storageBucket: "resultmanagement-f2d68.appspot.com",
//     messagingSenderId: "943256271830"
// };
// firebase.initializeApp(config);

// var studentRef = firebase.database().ref('students');