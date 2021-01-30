import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Body.css";

const Body = () => {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Welcome to B-store admin dashboard</h1>
        <p>
          New store on the market in your finger tip. Joint and let's explore
          with our quality products.
        </p>
        <p>
          <Button className="btn btn-lg" variant="primary" href="/signup">
            sign up
          </Button>

          <Button className="btn btn-lg" variant="success" href="/signin">
            sign in
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Body;
