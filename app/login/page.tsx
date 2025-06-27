'use client';

import { useAuthContext } from "../../context/auth/authContext";
export default function LoginPage() {

    const {
        handleLogin,
    } = useAuthContext()

    return (
        <div className="container-fluid" style={{ display: 'flex', padding: '50px' }}>
            <div className="form-login" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '15px' }}>
                <h1 className="text-center">Login Page</h1>
                <p className="text-center">Welcome to the login page. Please enter your credentials to continue.</p>
                <form
                    className="form-login"
                    method="POST"
                    onSubmit={handleLogin}
                >
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="form-control" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center">
                        Don't have an account?<a className="text-primary text-decoration-none" href="/register"> Create a new account</a>
                    </div>
                </form>
            </div>
        </div>
    )
}