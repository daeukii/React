// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8uosXR35vOYux4DGEHMAzbJMx22D2MDI",
  authDomain: "fir-test-3503f.firebaseapp.com",
  projectId: "fir-test-3503f",
  storageBucket: "fir-test-3503f.appspot.com",
  messagingSenderId: "814607013657",
  appId: "1:814607013657:web:6983ad655ea8e5f1f49788",
  measurementId: "G-7S3S6JM0GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export getAuth 