import firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDPHu8M1_Aivu2TZnIQ1lNQcZKuiMXPmIY",
    authDomain: "booksanta-29e63.firebaseapp.com",
    projectId: "booksanta-29e63",
    storageBucket: "booksanta-29e63.appspot.com",
    messagingSenderId: "96529662456",
    appId: "1:96529662456:web:5d0c39ea504a6e356f960d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
