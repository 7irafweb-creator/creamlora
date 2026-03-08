import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7g6Ek4GVYHLC5F-RmNqkFPSJARUzAf6g",
  authDomain: "creamlolra.firebaseapp.com",
  projectId: "creamlolra",
  storageBucket: "creamlolra.firebasestorage.app",
  messagingSenderId: "198830622098",
  appId: "1:198830622098:web:a6460b221a3f393669ad4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
