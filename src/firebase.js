// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA51qg1oeDbW1x5B7fjnbirF0H47T63uRU",
  authDomain: "realtor-react-clone-af40a.firebaseapp.com",
  projectId: "realtor-react-clone-af40a",
  storageBucket: "realtor-react-clone-af40a.appspot.com",
  messagingSenderId: "457607886482",
  appId: "1:457607886482:web:f80eeb7fdb2cdf7734584b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();