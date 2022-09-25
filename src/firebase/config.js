import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgSc7-Qzgyq6lqroC50nkTBcAdNIcdHrE",
    authDomain: "composition-api-e7ca9.firebaseapp.com",
    projectId: "composition-api-e7ca9",
    storageBucket: "composition-api-e7ca9.appspot.com",
    messagingSenderId: "170933507553",
    appId: "1:170933507553:web:25baa675326fcc61282ea0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {db,auth,timestamp};