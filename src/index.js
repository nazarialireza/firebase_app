// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js';
// import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';
// import { getFirestore, collection, getDocs, getDoc} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABRwU94Yphqg1QXTxU7KpiBLBCcJwV3uM",
    authDomain: "fir-app-28bb4.firebaseapp.com",
    projectId: "fir-app-28bb4",
    storageBucket: "fir-app-28bb4.appspot.com",
    messagingSenderId: "125085194869",
    appId: "1:125085194869:web:0b453cde7b085ed8b9f63c",
    measurementId: "G-8CL7B1DEW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// Detect outh state
onAuthStateChanged(auth, user => {
    if (user != null){
        console.log('logged in!');
    } else {
        console.log('No user!');
    }
});