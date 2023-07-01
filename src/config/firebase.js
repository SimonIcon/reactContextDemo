// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2BvSixWxuSlG3Z6tA3ETa3Ym4Ktfmi8I",
    authDomain: "fir-demo-ca789.firebaseapp.com",
    projectId: "fir-demo-ca789",
    storageBucket: "fir-demo-ca789.appspot.com",
    messagingSenderId: "824086405407",
    appId: "1:824086405407:web:0994347ad048aaee13902a",
    measurementId: "G-XLX0KBYSG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
