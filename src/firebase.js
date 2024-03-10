// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Dg0hVBRYId9LClt4l9QHlElJX23Qj0o",
  authDomain: "cmd-f-2024-gnosis.firebaseapp.com",
  projectId: "cmd-f-2024-gnosis",
  storageBucket: "cmd-f-2024-gnosis.appspot.com",
  messagingSenderId: "13573305637",
  appId: "1:13573305637:web:d73344880366e1787816cc",
  measurementId: "G-K6N0FK88N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// firestore object
const db = getFirestore();

export { db, auth }