// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const db = getFirestore(app);