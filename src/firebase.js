// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCWCYD67005mJu2UnT_KIZf_-6rIY4zSAU",
//     authDomain: "thenewspaper-f7d17.firebaseapp.com",
//     projectId: "thenewspaper-f7d17",
//     storageBucket: "thenewspaper-f7d17.appspot.com",
//     messagingSenderId: "646869575289",
//     appId: "1:646869575289:web:367bc2d46fa615fb9d16a8",
//     measurementId: "G-T9S9VKCNVL",
//     // databaseURL: "https://DATABASE_NAME.firebaseio.com",
//     databaseURL: "https://thenewspaper-f7d17-default-rtdb.asia-southeast1.firebasedatabase.app"
// };

// // Initialize Firebase


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth()

// export const db = getFirestore(app);
// export const realtimeDb = getDatabase(app)
const firebaseConfig = {
    apiKey: "AIzaSyCWCYD67005mJu2UnT_KIZf_-6rIY4zSAU",
    authDomain: "thenewspaper-f7d17.firebaseapp.com",
    projectId: "thenewspaper-f7d17",
    storageBucket: "thenewspaper-f7d17.appspot.com",
    messagingSenderId: "646869575289",
    appId: "1:646869575289:web:367bc2d46fa615fb9d16a8",
    measurementId: "G-T9S9VKCNVL",
    databaseURL: "https://thenewspaper-f7d17-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);