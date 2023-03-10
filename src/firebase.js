// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvGDp31Yben4WeR8mN5PaMS72i5uD3pwQ",
  authDomain: "todo-react-d74b9.firebaseapp.com",
  projectId: "todo-react-d74b9",
  storageBucket: "todo-react-d74b9.appspot.com",
  messagingSenderId: "373457266088",
  appId: "1:373457266088:web:8a736a64da1e1656d8699d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)