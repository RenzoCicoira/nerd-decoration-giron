// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI1V8YSbYBLqHKZ3LN_Iv5-5mjDSQgmLc",
  authDomain: "nerd-decoration-project.firebaseapp.com",
  projectId: "nerd-decoration-project",
  storageBucket: "nerd-decoration-project.appspot.com",
  messagingSenderId: "728408163573",
  appId: "1:728408163573:web:7da12e711db18fa4af31bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)