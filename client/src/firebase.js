// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-46719.firebaseapp.com",
  projectId: "mern-auth-46719",
  storageBucket: "mern-auth-46719.appspot.com",
  messagingSenderId: "1034975095885",
  appId: "1:1034975095885:web:b10817494261d5a36dc004"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);