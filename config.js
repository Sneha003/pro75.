import * as firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBQNxCJsqDoxY3cVITQRi6Me1EkxSgAz8Q",
    authDomain: "bedtimestories-9a89b.firebaseapp.com",
    projectId: "bedtimestories-9a89b",
    storageBucket: "bedtimestories-9a89b.appspot.com",
    messagingSenderId: "740076422737",
    appId: "1:740076422737:web:6ce65251d020034428da70",
    measurementId: "G-WS2EZKW89B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()




