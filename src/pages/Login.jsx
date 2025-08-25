import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../components/AuthProvider";

const Login = () => {
    const {loginUser, user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("🚀 ~ Login ~ location:", location)
    // Handle login form submission
    const handleLogin = e => {
        e.preventDefault();

        // Grav all form fields values
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // Login user from firebase
        loginUser(email, password);
    }
    useEffect(() => {
        if(user){
            navigate(location.state)
        }
    },[user])
    return (
        <div className="w-[500px] mx-auto p-4 mt-6">
            <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
            <form onSubmit={handleLogin} className="w-full space-y-4 border p-4 shadow-lg rounded-lg">
                <div>
                    <label className="label">Email</label><br />
                    <input type="text" name="email" className="input w-full" placeholder="Email" required />
                </div>
                <div>
                    <label className="label">Password</label><br />
                    <input type="password" name="password" className="input w-full" placeholder="password" required />
                </div>
                <button className="btn btn-primary w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;