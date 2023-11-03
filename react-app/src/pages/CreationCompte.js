import React from 'react';
import BarreNav from '../components/BarreNav';
import CreationCompteForm from '../components/CreationCompteForm';

const CreationCompte = () => {
    return (
        <div>
            <BarreNav />
            <h1>Création de votre compte</h1>
            <br />
            <br />
            <CreationCompteForm />
        </div>
    );
};

export default CreationCompte;