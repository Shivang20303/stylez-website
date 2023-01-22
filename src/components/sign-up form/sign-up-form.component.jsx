import { useState, useContext } from "react";
import { userContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    createAuthUserWithEmailAndPassword,
    createdoc,
} from "../../utility/firebase/firebase.utility";

import "./sign-up-form.styles.scss";

const defaultFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};


function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formFields;

    //Whenever you open the sign up page and try to login, the function will re-render/re-run because of useContext
    const { setCurrentUser } = useContext(userContext);

    function resetFields() {
        setFormFields(defaultFields);
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );


            const b = await createdoc(user, { displayName });
            console.log(user);
            console.log(b);
            resetFields();
            setCurrentUser(user);

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already used to SignUp");
            } else {
                console.log("User Creation error", error);
            }
            if (error.code === "auth/weak-password") {
                alert("Password should have atleast 6 characters");
            } else {
                console.log("User Creation error", error);
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Username"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
