import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYgHnfPEbsip4rNTbxHgLj1c9bJNos2Mg",
  authDomain: "capstone-project-1d794.firebaseapp.com",
  databaseURL: "https://capstone-project-1d794-default-rtdb.firebaseio.com",
  projectId: "capstone-project-1d794",
  storageBucket: "capstone-project-1d794.appspot.com",
  messagingSenderId: "393675000283",
  appId: "1:393675000283:web:e92c0567d3ce203ab37ffe",
  measurementId: "G-SPGKK6BJTC"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
