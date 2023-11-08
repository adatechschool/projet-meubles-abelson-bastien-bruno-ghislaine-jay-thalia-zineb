import React from "react";
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";

function LoginForm() {
  return (
    <Form id="login-form" style={{width:"30%",margin: "0 auto"}}>
      <Form.Group className="mb-3" controlId="formBasicUsername" style={{ backgroundColor: "#DDE5B6" }}>
        <Form.Label style={{ backgroundColor: "#DDE5B6" }}>Nom d'utilisateur</Form.Label>
        <Form.Control type="text" placeholder="Saisissez votre nom d'utilisateur" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{ backgroundColor: "#DDE5B6" }}>
        <Form.Label style={{ backgroundColor: "#DDE5B6" }}>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      
      <NavLink to="/admin">
      <Button variant="primary" type="submit">
        Valider
      </Button>
      </NavLink>

      <br />
      <NavLink to="/creationcompte" style={{ backgroundColor: "#DDE5B6" }}>Pas encore inscrit ? Créer votre compte ici.</NavLink>

    </Form>

  );
}

export default LoginForm;
