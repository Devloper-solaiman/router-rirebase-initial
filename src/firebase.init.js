// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHqw0Jpe8jzQOGpuUYQIx6UsGdDAp6M00",
    authDomain: "router-firebase-integration-s.firebaseapp.com",
    projectId: "router-firebase-integration-s",
    storageBucket: "router-firebase-integration-s.appspot.com",
    messagingSenderId: "790352864866",
    appId: "1:790352864866:web:0c889ce68b804232d7d33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;