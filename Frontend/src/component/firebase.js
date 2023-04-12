// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKrnfT3F3RQWl-fxgA1vpFo6r8fmuA7_4",
    authDomain: "connectwindow-d5734.firebaseapp.com",
    projectId: "connectwindow-d5734",
    storageBucket: "connectwindow-d5734.appspot.com",
    messagingSenderId: "31905423037",
    appId: "1:31905423037:web:690993175bfe247351e1d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);
const storage=getStorage(app);

export {app ,auth, storage};

