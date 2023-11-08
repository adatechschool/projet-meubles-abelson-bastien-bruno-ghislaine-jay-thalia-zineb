import React, { useEffect, useState } from 'react'; // Corrected import statement
import { useNavigate } from 'react-router-dom';
import BarreNav from '../components/BarreNav';
import CarteProduit from '../components/CarteProduit';

const Accueil = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleProductClick = (product) => {
    navigate(`/detailsproduit/${product._id}`, { state: product });
  };

  return (
    <div>
      <BarreNav />
      <h2><b>Nouveautés</b></h2>
      <br />

      <div id="cartes-produits">
        {products.map((product, index) => (
          <div key={product._id} className="produit" onClick={() => handleProductClick(product)}>
            <CarteProduit key={index} product={product} />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Accueil;