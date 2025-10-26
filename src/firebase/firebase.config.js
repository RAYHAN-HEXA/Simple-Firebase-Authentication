// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbdvEXnCI7o_49KRddK4WeJf6YGD9B0KY",
  authDomain: "simple-firebase-authenti-677af.firebaseapp.com",
  projectId: "simple-firebase-authenti-677af",
  storageBucket: "simple-firebase-authenti-677af.firebasestorage.app",
  messagingSenderId: "1052534188593",
  appId: "1:1052534188593:web:2df7a0eed8c9551248c310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);