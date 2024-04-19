import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1DUQqAAZVRHf25awiqlHmwIryes7_cLE",
  authDomain: "yumciti-firebase-beta.firebaseapp.com",
  projectId: "yumciti-firebase-beta",
  storageBucket: "yumciti-firebase-beta.appspot.com",
  messagingSenderId: "403965091086",
  appId: "1:403965091086:web:73f8269757a95003e88b5f",
  measurementId: "G-S014V4L11S",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);




export { db, auth, app };

// Get a list of cities from your database