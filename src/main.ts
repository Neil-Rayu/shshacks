// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8MsZ74VjIUcSx2DGKbdb6meEc24eH2TA',
  authDomain: 'shshacks-904ca.firebaseapp.com',
  projectId: 'shshacks-904ca',
  storageBucket: 'shshacks-904ca.appspot.com',
  messagingSenderId: '740298347865',
  appId: '1:740298347865:web:02e3c7bcd67e276b3d6848',
  measurementId: 'G-82ZQS9XXN7',
};

// Initialize Firebase
export var app = initializeApp(firebaseConfig);
export var db = getFirestore(app);
export var auth = getAuth(app);
console.log(app);
console.log(db);
