
const Login = () => {
    return (
        <div className="w-[500px] mx-auto p-4 mt-6">
            <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
            <form className="w-full space-y-4 border p-4 shadow-lg rounded-lg">
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