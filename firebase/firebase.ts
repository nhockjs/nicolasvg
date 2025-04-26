import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDY0_oApGtYTLE6YF6-eQDa3PBh48lo60",
  authDomain: "nicolasvg-7e575.firebaseapp.com",
  projectId: "nicolasvg-7e575",
  storageBucket: "nicolasvg-7e575.firebasestorage.app",
  messagingSenderId: "180055424674",
  appId: "1:180055424674:web:572fff9315238b86fc21fb",
  measurementId: "G-RLQS5NCG6J",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { auth };
export { database };
export { storage };
