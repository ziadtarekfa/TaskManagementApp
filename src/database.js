import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh7IA1ZDXDnJ--kRHmPbobKUmcj2GVzbE",
    authDomain: "taskmanagement-b8a20.firebaseapp.com",
    databaseURL: "https://taskmanagement-b8a20-default-rtdb.firebaseio.com",
    projectId: "taskmanagement-b8a20",
    storageBucket: "taskmanagement-b8a20.appspot.com",
    messagingSenderId: "481762512779",
    appId: "1:481762512779:web:c5471f5d0da26879e2298e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
