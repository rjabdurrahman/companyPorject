function $print(data) {
    console.log(data);
}

function $js(id) {
    return document.getElementById(id);
}

function $sn(name){
    return document.getElementsByName(name);
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

// Clearer
function clearer(...fields){
    for(field in fields){
        fields[field].value = "";
    }
}

function numValidate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
    }
    var regex = /[0-9]|\./;
    if (!regex.test(String.fromCharCode(key)) && key != 8  && key != 37  && key != 39) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Company Accounts
var accounts = {
    CA: { name: 'Current Asset', min: 1000, max: 1999 },
    NCA: { name: 'Non-Current Asset', min: 2000, max: 2999 },
    CL: { name: 'Current Liability', min: 3000, max: 3999 },
    NCL: { name: 'Non-Current Liability', min: 4000, max: 4999 },
    EQTY: { name: 'Equity', min: 5000, max: 5999 },
    EX: { name: 'Experience', min: 6000, max: 6999 },
    REV: { name: 'Revenue', min: 7000, max: 7999 },
    WD: { name: 'Withdrawal', min: 9500, max: 900 },
    SD: { name: 'Contra Revenue', min: 9500, max: 9999 },
    COGS: { name: 'Cost of Goods Sold', min: 8000, max: 8500 },
    WIP: { name: 'Production', min: 8501, max: 9000 },
    CN: { name: 'Contra', min: 9000, max: 9500 }
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

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcl2jCPFCebAgYpfygKlXraqy4N0lrN8o",
    authDomain: "company-173ab.firebaseapp.com",
    databaseURL: "https://company-173ab.firebaseio.com",
    projectId: "company-173ab",
    storageBucket: "",
    messagingSenderId: "289097515037"
};
firebase.initializeApp(config);
const auth = firebase.auth();
// auth.onAuthStateChanged(function (fuser) {
//     if (fuser) {
//         $print(fuser);
//         window.location.href = '#account';
//         // $js('dashboard').style.display = 'block';
//         // $js('loginboard').style.display = 'none';
//         // var user = firebase.auth().currentUser;
//         // if (user != null) {
//         //     name = user.displayName;
//         //     email = user.email;
//         //     photoUrl = user.photoURL;
//         //     emailVerified = user.emailVerified;
//         //     uid = user.uid;
//         // }
//     }
//     else {
//         $print('You are not logged!');
//         window.location.href = '#login';
//     }
// });