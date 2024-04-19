import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);




export { db, auth, app };

// Get a list of cities from your database