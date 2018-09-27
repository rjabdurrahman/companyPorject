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