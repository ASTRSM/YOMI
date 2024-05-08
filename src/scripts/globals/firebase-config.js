import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1gB2AYPCL54Br_5BncLS2Ro-3FbyJ9PM",
  authDomain: "yomi-kana.firebaseapp.com",
  databaseURL: "https://yomi-kana-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yomi-kana",
  storageBucket: "yomi-kana.appspot.com",
  messagingSenderId: "1002037556301",
  appId: "1:1002037556301:web:c02e49ace22ad3166d9804",
  measurementId: "G-G4GN67X6YG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);