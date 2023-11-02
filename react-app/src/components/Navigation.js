import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                
                <NavLink to="/apropos">
                    <li>A Propos</li>
                </NavLink>

                <NavLink to="/detailsproduit">
                    <li>Details du produit</li>
                </NavLink>

                <NavLink to="/admin">
                    <li>Admin</li>
                </NavLink>


            </ul>
        </div>
    );
};

export default Navigation;