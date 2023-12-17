// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB11z6kUVcJTUzt4hYmoozHgAiinUP62HM",
  authDomain: "abhishek-s-your-aid.firebaseapp.com",
  projectId: "abhishek-s-your-aid",
  storageBucket: "abhishek-s-your-aid.appspot.com",
  messagingSenderId: "426957616019",
  appId: "1:426957616019:web:219fe33b0e57ca8459ae66",
  measurementId: "G-P2CPG52CV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);