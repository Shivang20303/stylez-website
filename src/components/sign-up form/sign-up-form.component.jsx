import { useState } from "react";

const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
function SignUpForm() {
    const [formFields, setforFields] = useState(defaultFields);
    const {displayName,email,password,confirmPassword} = formFields;
    
    function handleChange(event) {
        const {name, value} = event.target;

        setforFields({...formFields, [name]: value})
    };
    
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={() => {}}>

                <label >Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                
                <label >Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>
                
                <label >Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password}/>
                
                <label >Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
            
            </form>
        </div>
    )
}

export default SignUpForm;