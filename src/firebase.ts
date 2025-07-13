// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgan5b7sMegbGjpl_Zlq4_xClh4Vh1iOU",
  authDomain: "sj-royal-events.firebaseapp.com",
  projectId: "sj-royal-events",
  storageBucket: "sj-royal-events.firebasestorage.app",
  messagingSenderId: "622831291790",
  appId: "1:622831291790:web:424f0b5a5f38b6e1fc28df",
  measurementId: "G-W9LX6R2PST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);