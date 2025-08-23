// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiEOCqXH92WVheOQKiFCAxVuu-0eO770I",
  authDomain: "fir-auth-practice-7dc30.firebaseapp.com",
  projectId: "fir-auth-practice-7dc30",
  storageBucket: "fir-auth-practice-7dc30.firebasestorage.app",
  messagingSenderId: "399036620835",
  appId: "1:399036620835:web:2d26d4f52a916541741196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;