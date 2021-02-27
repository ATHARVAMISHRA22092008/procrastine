import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBYzcFfcOGl8YZH_z8Ab7oq21PinCNM8Mo",
    authDomain: "procrastinex.firebaseapp.com",
    projectId: "procrastinex",
    storageBucket: "procrastinex.appspot.com",
    messagingSenderId: "512572185151",
    appId: "1:512572185151:web:2275d595df8feb6897768a"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();