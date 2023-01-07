// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, signI } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';   //For Authorization
//The doc library is used to create individual user document
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
    prompt: "select_account"    //On clicking the button it will always ask user to select the account with it will be logged in
});

//To initialize authentication
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export async function createdoc(userAuth) {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userData = await getDoc(userDocRef);

    //If new user i.e. user doesn't exit in the database
    if (!userData.exists()) {
        //displayName, email, createdAt are all generated when account is used to signIn
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt
            });
        } catch(error) {
            console.log("Error, Creating User", error.message);
        }
    }

    return userDocRef;
}