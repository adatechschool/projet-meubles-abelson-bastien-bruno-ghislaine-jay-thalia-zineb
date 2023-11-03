import React from "react";
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";

function CreationCompteForm() {
  return (
    <Form id="login-form" style={{width:"30%",margin: "0 auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{ backgroundColor: "#DDE5B6" }}>
        <Form.Label style={{ backgroundColor: "#DDE5B6" }}>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Saisissez votre adresse email" />
        <Form.Text className="text-muted" style={{ backgroundColor: "#DDE5B6" }}>
          Nous ne divulguerons jamais votre adresse email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{ backgroundColor: "#DDE5B6" }}>
        <Form.Label style={{ backgroundColor: "#DDE5B6" }}>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{ backgroundColor: "#DDE5B6" }}>
        <Form.Label style={{ backgroundColor: "#DDE5B6" }}>Ressaisissez votre mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Vos meubles préférés</Form.Label>
        <div id="liste-meubles">
          <div class="colonne-meubles">
        <Form.Check type="checkbox" label="Table"/>
        <Form.Check type="checkbox" label="Armoire"/>
        <Form.Check type="checkbox" label="Chaise"/>
          </div>
          <div class="colonne-meubles">
        <Form.Check type="checkbox" label="Lit"/>
        <Form.Check type="checkbox" label="Bureau"/>
        <Form.Check type="checkbox" label="Buffet"/>
        </div>
        </div>

      </Form.Group>

      <Button variant="primary" type="submit">
        Valider
      </Button>

    </Form>

  );
}

export default CreationCompteForm;
