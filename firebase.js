import firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN3Uli8IXQZKzcvG_gs38R2Cqj1ztO3ck",
  authDomain: "student-on-the-move-4383f.firebaseapp.com",
  projectId: "student-on-the-move-4383f",
  storageBucket: "student-on-the-move-4383f.appspot.com",
  messagingSenderId: "496105969901",
  appId: "1:496105969901:web:92bdc9490a35f64dc354e4",
  measurementId: "G-8XBJB4PBST"
};
let app ;
if(firebase.apps.length===0){
 app = firebase.initializeApp(firebaseConfig);
} else {
  app=firebase.app();
}

const db =app.firestore();
const auth = firebase.auth();
 
export {db,auth};