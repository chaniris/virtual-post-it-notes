import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCXHP6AOolhDgDqNOkA50wgL2IzbrB-vOw",
    authDomain: "virtual-post-it-notes.firebaseapp.com",
    projectId: "virtual-post-it-notes",
    storageBucket: "virtual-post-it-notes.appspot.com",
    messagingSenderId: "396488123912",
    appId: "1:396488123912:web:3c926ae55a545d14bc13bd"
};

const app = initializeApp(firebaseConfig);
const realtime = getDatabase(app); 

export default realtime; 