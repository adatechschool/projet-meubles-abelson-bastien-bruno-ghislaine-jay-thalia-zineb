import React from 'react';
import BarreNav from '../components/BarreNav';
import PanierForm from '../components/PanierForm';


const Panier = () => {
    return (
        <div>
            <BarreNav />
            <h2>Mon panier</h2>
            <PanierForm />  
        </div>
    );
};

export default Panier;