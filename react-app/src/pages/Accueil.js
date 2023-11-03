import React from 'react';
import BarreNav from '../components/BarreNav';
import CarteProduit from '../components/CarteProduit';



const Accueil = () => {
    return (
        <div>       
            <BarreNav />
            <h1>ACCUEIL</h1>
            <div id="cartes-produits">
            <CarteProduit />
            <CarteProduit />
            <CarteProduit /> 
            </div>     
        </div>
        
    );
};

export default Accueil;