import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {});

  //only run when component is mounted
  async function getRandomData() {
    try {
      let result = await axios.get(
        "https://sei25sg.herokuapp.com/products?random=true&limit=3"
      );

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md="4" className="mb-3">
            <Card>
              <Card.Body>Col 2</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 3</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
