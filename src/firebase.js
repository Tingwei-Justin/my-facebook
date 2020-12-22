import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf0rhuVM-02xmYLnwtxZ6nd9WJry7DWmA",
    authDomain: "my-facebook-4578a.firebaseapp.com",
    projectId: "my-facebook-4578a",
    storageBucket: "my-facebook-4578a.appspot.com",
    messagingSenderId: "271531024496",
    appId: "1:271531024496:web:cf9c5a6409c12062d354b5",
    measurementId: "G-8QFHQNZP6R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


export {auth, provider};
export default db;

