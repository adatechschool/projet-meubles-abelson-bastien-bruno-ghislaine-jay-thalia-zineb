import React from "react";
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/images/logo_meubles.png';
import { NavLink } from "react-router-dom";

const BarreNav = () => {
  return (
<header>
    <nav id="menu">
        <img src={logo} className="logo-site" alt="Logo de notre site de vente de meubles" />
        <h1>Recycl'Interieurs</h1>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">A Propos</NavLink>
        <NavLink to="/login">Mon compte</NavLink>
        <NavLink to="/panier">Mon panier</NavLink>
    </nav>
</header>
  );
}

export default BarreNav;
