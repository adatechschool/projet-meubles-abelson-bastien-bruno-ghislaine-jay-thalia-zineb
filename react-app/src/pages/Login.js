import React from 'react';
import BarreNav from '../components/BarreNav';
import LoginForm from '../components/LoginForm';
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <BarreNav />
            <h1>Connexion</h1>
            <br />
            <br />
            <LoginForm />
        </div>
    );
};

export default Login;