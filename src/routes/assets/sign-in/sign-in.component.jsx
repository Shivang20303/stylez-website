import { async } from '@firebase/util';
import { signInWithGooglePopup,createdoc } from '../../../utility/firebase/firebase.utility'

function SignIn() {
    async function logGoogleUser(){
        const {user} = await signInWithGooglePopup();
        createdoc(user);
    }

    return (
        <div>
            <h1>sign-in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;