import { async } from "@firebase/util";
import { useState } from "react";
import {
    signInWithGooglePopup,
    createdoc,
    signInAuthUserWithEmailAndPassword
} from "../../utility/firebase/firebase.utility";
import  FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFields = {
    email: "",
    password: "",
};
function SignIn() {
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;

    function resetFields() {
        setFormFields(defaultFields);
    }

    //Calling a database is always async-await
    async function signInWithGoogle(){
        const {user} = await signInWithGooglePopup();
        await createdoc(user);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email,password);
            resetFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password': 
                    alert("Incorrect password, Try Again!!");
                    break;
                case 'auth/user-not-found': 
                    alert("Username not found");
                    break;
                default: 
                    console.log(error);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit" >Log In</Button>
                    <Button type="button" id= "b2" buttonType='google' onClick={signInWithGoogle}>Google Log In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
