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
    CA: { name: 'Current Asset', min: 1001, max: 1999, flag: 1 },
    NCA: { name: 'Non-Current Asset', min: 2001, max: 2999, flag: 2 },
    CL: { name: 'Current Liability', min: 3001, max: 3999, flag: 3 },
    NCL: { name: 'Non-Current Liability', min: 4001, max: 4999, flag: 4 },
    EQTY: { name: 'Equity', min: 5001, max: 5999, flag: 5 },
    EX: { name: 'Expense', min: 6001, max: 6999, flag: 6 },
    REV: { name: 'Revenue', min: 7001, max: 7999, flag: 7 },
    WD: { name: 'Withdrawal', min: 9501, max: 9749, flag: 8 },
    SD: { name: 'Contra Revenue', min: 9750, max: 9999, flag: 9 },
    COGS: { name: 'Cost of Goods Sold', min: 8001, max: 8500, flag: 1 },
    WIP: { name: 'Production', min: 9001, max: 9500, flag: 11 },
    CN: { name: 'Contra', min: 8501, max: 8999, flag: 12 },
    PD: { name: 'Contra Expense', min: 9800, max: 9999, flag: 13 }
}

function accountFlag(nat) {
    for (ac in accounts) {
        if (accounts[ac].name == nat) return accounts[ac].flag;
    }
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
// User Info
var userInfo = {};
if (lsGet('user')) {
    userInfo = lsGetJ('user');
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
auth.onAuthStateChanged(function (fuser) {
    if (fuser) {
        // $print(fuser);
        var user = firebase.auth().currentUser;
        getRef('users/' + user.uid).once('value').then(function (snapshot) {
            let userIn = snapshot.val();
            if (!localStorage.user.uc) {
                Object.assign(userInfo, userIn);
                $print(userInfo);
                lsSetJ('user', userInfo);
            }
            var $body = angular.element(document.body);
            var $rootScope = $body.scope().$root;
            $rootScope.$apply(function () {
                $rootScope.userInfo = userInfo;
            });
        });
        // if (user != null) {
        //     name = user.displayName;
        //     email = user.email;
        //     photoUrl = user.photoURL;
        //     emailVerified = user.emailVerified;
        //     uid = user.uid;
        // }
    }
    else {
        $print('You are not logged!');
        // window.location.href = '#login';
    }
});

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

// JSX Alernative
function jsx(html) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    return wrapper.firstElementChild;
}

// Notifer
function notify(msg, t) {
    if (t == 1) {
        $('#notification').html("<h6>" + msg + "</h6>").removeClass('w3-red').addClass('w3-green').fadeIn(200).delay(300).fadeOut(200);
    }

    if (t == 2) {
        $('#notification').html("<h6>" + msg + "</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(300).fadeOut(200);
    }
}

function getQueryVariable(variable) {
    var query = window.location.hash.substring(window.location.hash.indexOf('?') + 1, window.location.hash.length);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
};

// User Default Permissions
var dPermission = {
    c_1: false,
    c_2: false,
    c_3: false,
    c_4: false,
    c_5: false,
    c_6: false,
    c_7: false,
    c_8: false,
    c_9: false,
    c_10: false,
    c_11: false,
    c_12: false,
    fe_1: false,
    fe_2: false,
    fe_3: false,
    fe_4: false,
    fe_5: false,
    fe_6: false,
    fe_7: false,
    j_1: false,
    j_2: false,
    l_1: false,
    l_2: false,
    l_3: false,
    l_4: false,
    l_5: false,
    uc: false
}

var pId = null;

function removeNewlines(str) {
    //remove line breaks from str
    str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/\t/g, ' ');
    str = str.toString().trim().replace(/(\r\n|\n|\r)/g, "");
    return str;
}