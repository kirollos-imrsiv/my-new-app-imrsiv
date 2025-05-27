// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ضع هنا الـ apiKey من Firebase",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "....",
  appId: "...."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
