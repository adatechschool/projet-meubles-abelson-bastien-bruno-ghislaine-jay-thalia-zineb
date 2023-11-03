import React from "react";
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <Form id="login-form" style={{width:"30%",margin: "0 auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Saisissez votre adresse email" />
        <Form.Text className="text-muted">
          Nous ne divulguerons jamais votre adresse email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Valider
      </Button>
    </Form>
  );
}

export default LoginForm;
