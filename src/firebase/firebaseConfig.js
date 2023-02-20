// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlbNC05V4Kumkw9XjTbtq2evjT9lI3dVE",
  authDomain: "curso-react-b0c49.firebaseapp.com",
  projectId: "curso-react-b0c49",
  storageBucket: "curso-react-b0c49.appspot.com",
  messagingSenderId: "943344419707",
  appId: "1:943344419707:web:2c7dfc548a1155a44173de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;