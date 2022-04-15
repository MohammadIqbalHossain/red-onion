// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5DXgPOCg6J2R6eRuiYpH7c4d7R4jC8lE",
    authDomain: "red-onion-2a1d6.firebaseapp.com",
    projectId: "red-onion-2a1d6",
    storageBucket: "red-onion-2a1d6.appspot.com",
    messagingSenderId: "408991942855",
    appId: "1:408991942855:web:b0884b335939928ac156e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;