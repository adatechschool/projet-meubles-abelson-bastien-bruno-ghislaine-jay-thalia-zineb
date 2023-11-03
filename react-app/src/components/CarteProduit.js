import React from "react";
import '../styles.css';
import BoutonAchat from './BoutonAchat';
import Card from 'react-bootstrap/Card';
import table from '../assets/images/table_basse.jpg';

const CarteProduit = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" img src={table} alt="Photo du produit" />
    <Card.Body style = {{ backgroundColor: 'white' }} >
      <Card.Title style = {{ backgroundColor: 'white' }} >Table basse</Card.Title>
      <Card.Text style = {{ backgroundColor: 'white' }} >Table</Card.Text>
      <Card.Text style = {{ backgroundColor: 'white' }} >200€</Card.Text>
      <BoutonAchat />
    </Card.Body>
  </Card>
  );
}

export default CarteProduit;