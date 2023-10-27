// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBq5uMUL6Sc9j2tzMG620K3gRq_9G7jUs",
  authDomain: "ema-john-firebase-auth-683c6.firebaseapp.com",
  projectId: "ema-john-firebase-auth-683c6",
  storageBucket: "ema-john-firebase-auth-683c6.appspot.com",
  messagingSenderId: "1002051602507",
  appId: "1:1002051602507:web:38c57c193b4296f99b25ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;