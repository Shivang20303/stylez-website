import { async } from '@firebase/util';
import { signInWithGooglePopup,createdoc } from '../../../utility/firebase/firebase.utility';
import SignUpForm from '../../../components/sign-up form/sign-up-form.component';

function SignIn() {
    //Calling a database is always async-await
    async function logGoogleUser(){
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createdoc(user);
    }

    return (
        <div>
            <h1>Sign-in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
        
    )
}

export default SignIn;