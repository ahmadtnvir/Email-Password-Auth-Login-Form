// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3eBKiPWKWQV1mpD8mDxive-_6op52pzY",
  authDomain: "email-password-auth-logi-4391a.firebaseapp.com",
  projectId: "email-password-auth-logi-4391a",
  storageBucket: "email-password-auth-logi-4391a.appspot.com",
  messagingSenderId: "647492126311",
  appId: "1:647492126311:web:37485451b2dab6871c76c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;