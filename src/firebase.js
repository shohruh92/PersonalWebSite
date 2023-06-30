// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP_CQC4fHfCuVCf33o9Wum968O08KJkHg",
  authDomain: "myaplication-7a993.firebaseapp.com",
  databaseURL: "https://myaplication-7a993-default-rtdb.firebaseio.com",
  projectId: "myaplication-7a993",
  storageBucket: "myaplication-7a993.appspot.com",
  messagingSenderId: "16005049020",
  appId: "1:16005049020:web:82576e28107ccdf468feb9",
  measurementId: "G-Q4VNQ68PZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;