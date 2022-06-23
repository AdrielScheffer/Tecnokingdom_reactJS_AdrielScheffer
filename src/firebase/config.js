// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpdfx1vsRvOZo3rm4XXZ7LQxNPf2tcDB0",
  authDomain: "tecnokingdom-adrielscheffer.firebaseapp.com",
  projectId: "tecnokingdom-adrielscheffer",
  storageBucket: "tecnokingdom-adrielscheffer.appspot.com",
  messagingSenderId: "712705728652",
  appId: "1:712705728652:web:03fee84abbf48122dedba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)