import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDWnIOv76BZEP934HJMh9r90kXqKXhdG5A",
    authDomain: "linkedin-clone-8b7fb.firebaseapp.com",
    projectId: "linkedin-clone-8b7fb",
    storageBucket: "linkedin-clone-8b7fb.appspot.com",
    messagingSenderId: "90381757928",
    appId: "1:90381757928:web:bf3f5d6fac8b634a9e885d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
