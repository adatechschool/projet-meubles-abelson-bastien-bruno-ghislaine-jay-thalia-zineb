import React from 'react';
import BarreNav from '../components/BarreNav';
import PanierForm from '../components/PanierForm';


const Panier = () => {
    return (
        <div>
            <BarreNav />
            <h1>Mon panier</h1>
            <PanierForm />  
        </div>
    );
};

export default Panier;