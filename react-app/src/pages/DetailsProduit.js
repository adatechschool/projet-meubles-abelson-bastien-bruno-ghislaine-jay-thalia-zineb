import React from 'react';
import Carroussel from '../components/Carroussel';
import BarreNav from '../components/BarreNav';
// import BoutonAchat from '../components/BoutonAchat';

const DetailsProduit = () => {
    return (
        <div class="center">
             <BarreNav />
            <h1 class="text-white bg-dark">DETAILS DU PRODUIT</h1>
            <div className="display" class="float-start">
            <Carroussel />
            </div>

            <div class="float-end">
                <h1>description</h1>
            </div>  
         </div>
       
    );
};

export default DetailsProduit;