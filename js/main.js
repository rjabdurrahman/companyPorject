function $print(data) {
    console.log(data);
}

function $js(id) {
    return document.getElementById(id);
}

function $sn(name) {
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
function exitModel() {
    document.getElementById('id01').style.display = 'none';
}
function clearer(...fields) {
    for (field in fields) {
        fields[field].value = "";
    }
}

// Date Expression
var dateEx = /^\d{1,2}-(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)-\d{2}$/i;

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
    if (!regex.test(String.fromCharCode(key)) && key != 8 && key != 37 && key != 39) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Company Accounts
var accounts = {
    CA: { name: 'Current Asset', min: 1001, max: 1999 },
    NCA: { name: 'Non-Current Asset', min: 2001, max: 2999 },
    CL: { name: 'Current Liability', min: 3001, max: 3999 },
    NCL: { name: 'Non-Current Liability', min: 4001, max: 4999 },
    EQTY: { name: 'Equity', min: 5001, max: 5999 },
    EX: { name: 'Experience', min: 6001, max: 6999 },
    REV: { name: 'Revenue', min: 7001, max: 7999 },
    WD: { name: 'Withdrawal', min: 9501, max: 9749 },
    SD: { name: 'Contra Revenue', min: 9750, max: 9999 },
    COGS: { name: 'Cost of Goods Sold', min: 8001, max: 8500 },
    WIP: { name: 'Production', min: 9001, max: 9500 },
    CN: { name: 'Contra', min: 8501, max: 8999 },
    PD: { name: 'Contra Expense', min: 9800, max: 9999 }
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
// const auth = firebase.auth();
// auth.onAuthStateChanged(function (fuser) {
//     if (fuser) {
//         $print(fuser);
//         window.location.href = '#account';
//         $('#dashboard').css('display', 'block');
//         $('#loginboard').css('display', 'none');
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

var db = firebase.database().ref();

function getRef(name) {
    return db.child(name);
}

// Initialize Cloud Firestore through Firebase
var fsDb = firebase.firestore();

// Disable deprecated features
fsDb.settings({
    timestampsInSnapshots: true
});

// Last Entry for For Form Entry
var lastEntryNo = null;

function formDataToFire(cname, dname, data, cleardata) {
    fsDb.collection(cname).doc(dname).set(data)
        .then(function () {
            db.child('lastFormEntry').set({ value: ++lastEntryNo[0].$value });
            $('#notification').html("<h6>Added Sucessfully</h6>").removeClass('w3-red').addClass('w3-green').fadeIn(200).delay(300).fadeOut(200);
            cleardata();
        })
        .catch(function (error) {
            $('#notification').html("<h6>Something Went Wrong in Database!</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(300).fadeOut(200);
        });
}
// Date to Number function
function dateToNum(dateStr) {
    let dateArr = dateStr.split('-');
    let mon = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let date = new Date(parseInt('20' + dateArr[2]), parseInt(mon.indexOf(dateArr[1].toLowerCase())), parseInt(dateArr[0]));
    return Date.parse(date);
}

var numToDateConv = function (num) {
    let mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(num);
    return date.getDate().toString() + '-' + mon[date.getMonth()] + '-' + date.getFullYear().toString().slice(-2);
}