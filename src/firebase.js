import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA1jFER_vHD9oHcc200V7D8sNAgWy-bllo",
    authDomain: "project-three-eb80b.firebaseapp.com",
    projectId: "project-three-eb80b",
    storageBucket: "project-three-eb80b.appspot.com",
    messagingSenderId: "585499896836",
    appId: "1:585499896836:web:2837470b45956a47e65951"
};

const app = initializeApp(firebaseConfig);
const realtime = getDatabase(app); 

export default realtime; 