import React from 'react';
import BarreNav from '../components/BarreNav';
import CarteProduit from '../components/CarteProduit';



const Accueil = () => {
    return (
        <div>       
            <BarreNav />
            <h3>Bienvenue sur Recycl'Interieurs,
            <br />votre destination en ligne pour trouver des meubles de seconde main de qualité et abordables</h3>
            <div id="cartes-produits">
            <CarteProduit />
            <CarteProduit />
            <CarteProduit /> 
            </div>     
        </div>
        
    );
};

export default Accueil;