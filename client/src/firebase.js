// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-37ca7.firebaseapp.com",
  projectId: "realstate-37ca7",
  storageBucket: "realstate-37ca7.appspot.com",
  messagingSenderId: "760430878577",
  appId: "1:760430878577:web:91a666662d407e143e20d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);