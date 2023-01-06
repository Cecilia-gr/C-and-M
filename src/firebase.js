// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV0zRNwEVppIUv2MPAImYCghuL2aeBEUw",
  authDomain: "databasecm-d26a6.firebaseapp.com",
  databaseURL: "https://databasecm-d26a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "databasecm-d26a6",
  storageBucket: "databasecm-d26a6.appspot.com",
  messagingSenderId: "464362600405",
  appId: "1:464362600405:web:ac03c4f297e2145d636f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)