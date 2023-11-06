import React from "react";
import Carroussel from "../components/Carroussel";
import BarreNav from "../components/BarreNav";
import BoutonAchat from "../components/BoutonAchat";
import { useEffect, useState } from "react";

const DetailsProduit = () => {
  const [product, setProduct] = useState({});

  const fetchProductData = () => {
    fetch("http://localhost:3001/api/meuble?id=2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <BarreNav />
      <div class="display">
        <div className="display float-start">
          <Carroussel />
        </div>

        <div>
          <h2>{product.name ?? ""}</h2>
          <br />
          <p>CATEGORIE : {product.type ?? ""}</p>
          <p>COULEUR : {product.colors ?? ""}</p>
          <p>DIMENSIONS : {product.size ?? ""} cm</p>
          <p>Livraison à domicile, en magasin ou en relais Pickup</p>
          <p className="green"> EN STOCK</p>
          <hr />
          <p className="text-end">
            <span>Prix : {product.price ?? 0} euros</span>
          </p>
          <BoutonAchat />
        </div>
      </div>
    </div>
  );
};

export default DetailsProduit;
