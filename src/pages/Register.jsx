import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthProvider";

const Register = () => {
    const {registerUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    // handle registration form submission
    const handleRegister = e => {
        e.preventDefault();

        // grave all form fields values
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log('Form submitted!', name, email, password, confirmPassword);

        // password validation
        if (password.length < 6){
            // console.log(password.length);
            setRegisterError("Password must be at least 6 characters long");
            return;
        }
        else if(password !== confirmPassword){
            setRegisterError("Your password did not match!");
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setRegisterError("Please add at least one uppercase letter.");
            return;
        }

        setRegisterError(''); // clear previous error

        // register user from firebase
        registerUser(email, password);
    }
    return (
        <div className="w-[500px] mx-auto p-4 mt-6">
            <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>
            <form onSubmit={handleRegister} className="w-full space-y-4 border p-4 shadow-lg rounded-lg">
                <div>
                    <label className="label">Name</label><br />
                    <input type="text" name="name" className="input w-full" placeholder="Name" required />
                </div>
                <div>
                    <label className="label">Email</label><br />
                    <input type="text" name="email" className="input w-full" placeholder="Email" required />
                </div>
                <div>
                    <label className="label">Password</label><br />
                    <input type="password" name="password" className="input w-full" placeholder="password" required />
                </div>
                <div>
                    <label className="label">Confirm Password</label><br />
                    <input type="password" name="confirmPassword" className="input w-full" placeholder="password" required />
                </div>
                {
                    registerError && <p className="text-red-600 font-bold">{registerError}</p>
                }
                <button className="btn btn-primary w-full">Register</button>
            </form>
        </div>
    );
};

export default Register;