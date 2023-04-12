// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // apiKey: "AIzaSyBKWKP-pjIPlgqzsSpNUHMqX5KyQtVhns0",
    // authDomain: "instaclone-a15cb.firebaseapp.com",
    // projectId: "instaclone-a15cb",
    // storageBucket: "instaclone-a15cb.appspot.com",
    // messagingSenderId: "354429032303",
    // appId: "1:354429032303:web:2d16f9712cab2e4a367a9a"
    apiKey: "AIzaSyA0YHXL0Ww6RWC5AKtBwn6YXFNfh0A3Uvk",
    authDomain: "finalproject-7280f.firebaseapp.com",
    projectId: "finalproject-7280f",
    storageBucket: "finalproject-7280f.appspot.com",
    messagingSenderId: "801618413406",
    appId: "1:801618413406:web:cd97714f032167f4db31cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);
const storage=getStorage(app);

export {app ,auth, storage};

