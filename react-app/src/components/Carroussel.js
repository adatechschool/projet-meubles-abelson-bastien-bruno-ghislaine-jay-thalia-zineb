import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
const Carroussel = () => {
  const location = useLocation();
  const product = location.state; // Récupérez les données du produit depuis l'emplacement de navigation
  // Assurez-vous que product.images est défini avant de l'utiliser
  if (!product || !product.images) {
    return null; // Ou affichez un message d'erreur si les données du produit ne sont pas disponibles
  }
  return (
    <div id="carrousel">
      <Carousel >
        {product.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 imgSize"
              src={`http://localhost:3001/${image}`}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Carroussel;