import React, { useState } from 'react';
import './login.css';  

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            setErrorMsg('');
            window.location.href = '/admin-dashboard';
        } else {
            setErrorMsg('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h2 className='logoroots'>Roots</h2>
            <h2 className='Adminpage'>Admin Page</h2>
            <h2 className='Acces'>Access to your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMsg && <div className="error-message">{errorMsg}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;