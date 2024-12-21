// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE68LvhDaW0dWz4J_8IU7DKPX8itqNywA",
  authDomain: "job-hunt-hub.firebaseapp.com",
  projectId: "job-hunt-hub",
  storageBucket: "job-hunt-hub.firebasestorage.app",
  messagingSenderId: "710756441471",
  appId: "1:710756441471:web:0cfd09d1cea2198f6bce4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;