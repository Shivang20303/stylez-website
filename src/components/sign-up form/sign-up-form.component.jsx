import { async } from "@firebase/util";
import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createdoc,
} from "../../utility/firebase/firebase.utility";
import  FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formFields;

    function resetFields() {
        setFormFields(defaultFields);
    }
    function handleChange(event) {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createdoc(user, { displayName });
            resetFields();
        } catch (error) {
            if (error.code == "auth/email-already-in-use") {
                alert("Email already used to SignUp");
            } else {
                console.log("User Creation error", error);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Signup</h1>
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
}

export default SignUpForm;
