// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCojjbNEww4x6qRCXrz1-5Vy-g4-adGFT8",
  authDomain: "interviewprep-a61ae.firebaseapp.com",
  projectId: "interviewprep-a61ae",
  storageBucket: "interviewprep-a61ae.firebasestorage.app",
  messagingSenderId: "751585961335",
  appId: "1:751585961335:web:54c11650fabbe6feba6d72",
  measurementId: "G-2LJ6ST5GMC"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);