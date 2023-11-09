import React from "react";
import '../styles.css';
import BoutonAchat from './BoutonAchat';
import Card from 'react-bootstrap/Card';

const CarteProduit = ( {product} ) => {
  return (
    <Card id="carte-indiv" style={{ width: '18rem', margin: '10px' }}>
    <Card.Img variant="top" img src={`http://localhost:3001/${product.images[0]}`} alt="Photo du produit" style={{ height:'15rem' }} />
    <Card.Body style = {{ backgroundColor: 'white' }} >
      <Card.Title style = {{ backgroundColor: 'white' }} >{product.name}</Card.Title>
      <Card.Text style = {{ backgroundColor: 'white' }} >{product.type}</Card.Text>
      <Card.Text style = {{ backgroundColor: 'white' }} >{product.price} €</Card.Text>
      
    </Card.Body>
    <BoutonAchat style={{ alignItems: 'flex-end' }} />
  </Card>
  );
}

export default CarteProduit;