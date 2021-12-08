import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGNPTuF2b_bk6msZ453MKv5wP47XUXTgs",
    authDomain: "fantasyapp-auth.firebaseapp.com",
    projectId: "fantasyapp-auth",
    storageBucket: "fantasyapp-auth.appspot.com",
    messagingSenderId: "623481762594",
    appId: "1:623481762594:web:24a9cf9eb5c2f5aac16b7b"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;