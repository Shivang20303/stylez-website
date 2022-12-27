// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, signI } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIRBe2sbPtm9rhr_Q2AZjEeezzoSHvMrM",
    authDomain: "stylezy-db.firebaseapp.com",
    projectId: "stylezy-db",
    storageBucket: "stylezy-db.appspot.com",
    messagingSenderId: "159259860049",
    appId: "1:159259860049:web:1d7d0c574c19e1d128ac70",
    measurementId: "G-BW20HHNEB2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export async function createdoc(userAuth) {
    const userDocRef = doc(db,'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
}