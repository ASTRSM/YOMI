import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDV4uWTK7Tb4EdULhU2VHcv49DaS_8jIw",
  authDomain: "yomi-f9728.firebaseapp.com",
  databaseURL: "https://yomi-f9728-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yomi-f9728",
  storageBucket: "yomi-f9728.appspot.com",
  messagingSenderId: "641679206365",
  appId: "1:641679206365:web:9a66862a5a1062cf373834",
  measurementId: "G-E3NR6FDJ72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

