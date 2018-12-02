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
        $print(fuser);
        window.location.href = '#account';
        $('#dashboard').css('display', 'block');
        $('#loginboard').css('display', 'none');
        // var user = firebase.auth().currentUser;
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
        window.location.href = '#login';
    }
});