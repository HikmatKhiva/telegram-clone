import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyAjUCuDaNheoQezVsfKLy9PvSaYIUF8PPE",

  authDomain: "telegram-clone-31107.firebaseapp.com",

  projectId: "telegram-clone-31107",

  storageBucket: "telegram-clone-31107.appspot.com",

  messagingSenderId: "1000557459000",

  appId: "1:1000557459000:web:45caad2ce4245f6d2c98cd",

  measurementId: "G-812FWG8TSQ"

};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { db, auth, provider }

