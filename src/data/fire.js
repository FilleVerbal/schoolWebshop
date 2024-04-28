// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFRkXLmVc9mXipZLwJjaIzObEBfYKNkQI",
  authDomain: "webshopschool-3b311.firebaseapp.com",
  projectId: "webshopschool-3b311",
  storageBucket: "webshopschool-3b311.appspot.com",
  messagingSenderId: "159695448351",
  appId: "1:159695448351:web:b86f76ae747306d50be82a",
  measurementId: "G-Q8NH7K9DZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }