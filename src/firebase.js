import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDUwI0JNDDZKQSBsGDBqI4WUbk6GArlrw4",
    authDomain: "amritesh-portfolio.firebaseapp.com",
    projectId: "amritesh-portfolio",
    storageBucket: "amritesh-portfolio.appspot.com",
    messagingSenderId: "449628948517",
    appId: "1:449628948517:web:52f838fed7dc4667ca17cc"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()