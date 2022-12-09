// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA4Rt9h7fSDhxDyT5r6blQiZK3k0Jz1Mw",
  authDomain: "realtor-clone-react-2d232.firebaseapp.com",
  projectId: "realtor-clone-react-2d232",
  storageBucket: "realtor-clone-react-2d232.appspot.com",
  messagingSenderId: "761015529855",
  appId: "1:761015529855:web:daca28cd98e71b9cf22a4a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
