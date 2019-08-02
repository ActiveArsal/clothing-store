import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxBmO634jT_USD8kt34vg-v2zIcrSFoCk",
    authDomain: "clothes-db-15fdb.firebaseapp.com",
    databaseURL: "https://clothes-db-15fdb.firebaseio.com",
    projectId: "clothes-db-15fdb",
    storageBucket: "",
    messagingSenderId: "50367911070",
    appId: "1:50367911070:web:74a3ae2e254b53de"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;