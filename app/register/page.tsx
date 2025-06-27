'use client';

import { useAuthContext } from "../../context/auth/authContext";

export default function RegisterPage() {
    const {
        handleRegister
    } = useAuthContext()

    return (
        <div className="container-fluid" style={{ display: 'flex', padding: '50px' }}>
            <div className="form-login" style={{ maxWidth: '45%', minWidth: '40%', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '15px' }}>
                <h1 className="text-center">Register</h1>
                <form className="form-login"
                    method="POST"
                    onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="fullname">Fullname:</label>
                        <input type="text" id="fullname" name="fullname" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Email:</label>
                        <input type="email" id="phone" name="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPass">Confirm password:</label>
                        <input type="password" id="confirmPass" name="confirmPass" className="form-control" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}