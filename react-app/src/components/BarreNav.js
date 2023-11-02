import React from "react";
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../assets/images/logo_meubles.png'

const BarreNav = () => {
  return (
<header>
    <nav id="menu">
        <img src={logo} className="logo-site" alt="Logo de notre site de vente de meubles" />
        <h1>Recycl'Interieurs</h1>
        <a href="">Accueil</a>
        <a href="">Mon compte</a>
        <a href="">Mon panier</a>
    </nav>
</header>
  );
}

export default BarreNav;
