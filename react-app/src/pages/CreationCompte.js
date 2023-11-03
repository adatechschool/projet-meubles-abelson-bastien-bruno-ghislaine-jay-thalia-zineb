import React from 'react';
import BarreNav from '../components/BarreNav';
import CreationCompteForm from '../components/CreationCompteForm';

const CreationCompte = () => {
    return (
        <div>
            <BarreNav />
            <h2>Création de votre compte</h2>
            <br />
            <br />
            <CreationCompteForm />
        </div>
    );
};

export default CreationCompte;