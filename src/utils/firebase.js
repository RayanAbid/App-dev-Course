// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// import "firebase/auth";
// import "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwVcUHqsKLPKm4VJhCc9eF_cQlV2MOOJw",
  authDomain: "fit-club-c8cde.firebaseapp.com",
  projectId: "fit-club-c8cde",
  storageBucket: "fit-club-c8cde.appspot.com",
  messagingSenderId: "534008076009",
  appId: "1:534008076009:web:49a13f9962b83666954278",
  measurementId: "G-YLVM83WDZZ",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage, firebase };
