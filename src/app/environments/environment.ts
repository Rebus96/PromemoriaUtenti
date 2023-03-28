// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAivb0EXv6izUnJPxBg5_ueVfUMib-OsNU",
  authDomain: "promemoria-c23cb.firebaseapp.com",
  projectId: "promemoria-c23cb",
  storageBucket: "promemoria-c23cb.appspot.com",
  messagingSenderId: "649828189225",
  appId: "1:649828189225:web:edbb6b04735cf7325a4838",
  measurementId: "G-KNXFVND4T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
