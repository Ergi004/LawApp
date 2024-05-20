// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyh_ARlHjHPNCkFLfEPRsx0gPbQQJ2N7w",
  authDomain: "ligjet-6fc9e.firebaseapp.com",
  projectId: "ligjet-6fc9e",
  storageBucket: "ligjet-6fc9e.appspot.com",
  databaseURL: "https://ligjet-6fc9e-default-rtdb.firebaseio.com",
  messagingSenderId: "261029005621",
  appId: "1:261029005621:web:f92063786b2cc2a84d647c",
  measurementId: "G-M8ER4069EF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); 
