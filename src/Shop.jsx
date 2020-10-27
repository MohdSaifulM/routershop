import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
function Shop() {
  return (
    <div className="mb-3">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>Col 1</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
