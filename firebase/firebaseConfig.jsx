
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw7ygb1KnVKnFM13vZF6TTgVryR3L_M4E",
  authDomain: "luxify82.firebaseapp.com",
  projectId: "luxify82",
  storageBucket: "luxify82.appspot.com",
  messagingSenderId: "134269233697",
  appId: "1:134269233697:web:bcd513e96f4dbe641e9160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;