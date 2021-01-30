import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <Form className="form-class">
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="first name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="first name" />
      </Form.Group>
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
      <strong>Already have an account ?</strong>
      <Link to="/signin">signin</Link>
    </Form>
  );
};

export default Signup;
