import React from 'react';
import BarreNav from '../components/BarreNav';
import CarteProduit from '../components/CarteProduit';
import { useEffect, useState } from "react";


const Accueil = () => {
  const [products, setProducts] = useState([]);

  const fetchProductData = () => {
    fetch("http://localhost:3001/meubles/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
    <BarreNav />
    <h2><b>Nouveautés</b></h2>
    <br />

    <div id="cartes-produits">
      {products.map((product, index) => (
        <CarteProduit key={index} product={product} />
      ))}
    </div>
    <br />
  </div>
);
};

export default Accueil;