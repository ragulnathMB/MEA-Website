import React from 'react';
import s from './AdminLogin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const AdminLogin = () => {
    return (
        <div className={s.container}>
            <div className={s.loginBox}>
                <h2>Admin Login</h2>
                <form>
                    <div className={s.userBox}>
                        <FontAwesomeIcon icon={faUser} className={s.icon} />
                        <input type="text" name="username" required />
                        <label>Username</label>
                    </div>
                    <div className={s.userBox}>
                        <FontAwesomeIcon icon={faLock} className={s.icon} />
                        <input style={s.inputStyle} type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className={s.loginButton}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
