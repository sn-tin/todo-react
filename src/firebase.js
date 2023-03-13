// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth
} from 'firebase/auth'
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtHzR99aJ42lphpf7c1vwKptMIg73ssrQ",
  authDomain: "todo-app-c2baf.firebaseapp.com",
  projectId: "todo-app-c2baf",
  storageBucket: "todo-app-c2baf.appspot.com",
  messagingSenderId: "349405369015",
  appId: "1:349405369015:web:501a458c9b770d3fccf332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize services
export const db = getDatabase(app);
export const auth = getAuth(app);