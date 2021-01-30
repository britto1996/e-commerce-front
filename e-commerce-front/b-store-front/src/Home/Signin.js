import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Form className="form-class">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="btn-block btn-lg" variant="primary" type="submit">
        Submit
      </Button>
      <strong>Don't have an account ?</strong>
      <Link to="/signup">signup</Link>
    </Form>
  );
};

export default Signin;
