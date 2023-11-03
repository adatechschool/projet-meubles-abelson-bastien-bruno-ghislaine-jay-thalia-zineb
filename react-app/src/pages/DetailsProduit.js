import React from 'react';
import Carroussel from '../components/Carroussel';
import BarreNav from '../components/BarreNav';
import BoutonAchat from '../components/BoutonAchat';

const DetailsProduit = () => {
    return (
        <div>
             <BarreNav />
            <div class="display">
            <div className="display" class="float-start">
            <Carroussel />
            </div>

            <div>
            <h1>Fauteuil en bois et cannage</h1>
            <br/>
            <p>Détails du produit</p>
          
            <p>COULEUR : Brun</p>
            
            <p>DIMENSION : L50,8 x l53 x 68cm</p>
           

            <p>Livraison à domicile, en magasin ou en relais Pickup</p>
            <p class="green"> EN STOCK</p>
            
            <hr/>
            <p class="text-end"><span>150 , 00 euros</span></p>
            <BoutonAchat />


            </div>  

            </div>

            

        </div>
       
    );
};

export default DetailsProduit;