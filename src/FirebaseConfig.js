import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCS_sqkXAIWvvxg1Pa9R1ZohTVfBPmjnII",
    authDomain: "fullstackassignment-49a75.firebaseapp.com",
    projectId: "fullstackassignment-49a75",
    storageBucket: "fullstackassignment-49a75.appspot.com",
    messagingSenderId: "924880342433",
    appId: "1:924880342433:web:371fc1341ae0d46ed2cfe0",
    measurementId: "G-L17H3BSBEK",
    databaseURL: "https://fullstackassignment-49a75-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);