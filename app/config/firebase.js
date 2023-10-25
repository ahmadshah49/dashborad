import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0Wab1H3wJ1S3rzDowUcIkpfbC4Kl9GoU",
  authDomain: "fir-f0374.firebaseapp.com",
  projectId: "fir-f0374",
  storageBucket: "fir-f0374.appspot.com",
  messagingSenderId: "40581456548",
  appId: "1:40581456548:web:30c8d01863133c7db13c31"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);