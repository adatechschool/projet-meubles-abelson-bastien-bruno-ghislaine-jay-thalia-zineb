import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarreNav from '../components/BarreNav';
import CarteProduit from '../components/CarteProduit';

const Accueil = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProductData = () => {
    fetch("http://localhost:3001/meubles/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/detailsproduit/${product._id}`, { state: product });
  };

  return (
    <div>
      <BarreNav />
      <h2><b>Nouveautés</b></h2>
      <br />

      <div id="cartes-produits">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="produit" onClick={() => handleProductClick(product)}>
              <CarteProduit product={product} />
            </div>
          ))
        ) : (
          // You can render a loading indicator or an appropriate message while data is being fetched
          <p>Loading...</p>
        )}
      </div>
      <br />
    </div>
  );
};

export default Accueil;