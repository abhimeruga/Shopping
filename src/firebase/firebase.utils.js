import firebase from 'firebase/app';
import Auth from 'firebase/auth';
import Firestore from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC3M7GzrB6yCTsMtK7vxQbJoKR__q2q0Ys",
    authDomain: "shopping-1cde4.firebaseapp.com",
    databaseURL: "https://shopping-1cde4.firebaseio.com",
    projectId: "shopping-1cde4",
    storageBucket: "shopping-1cde4.appspot.com",
    messagingSenderId: "730535347603",
    appId: "1:730535347603:web:bf2f0da98b875056731466"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
}
export default firebase;