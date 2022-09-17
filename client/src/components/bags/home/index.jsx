import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

export default function index() {
  return (
    <Container fluid className="mt-5" >
      <Row>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Col style={{ marginBottom: 100 }} xs={12} md={6} lg={4}>
            <Card style={{ height: "557px", border: "none" }}>
              <Card.Img
                variant="top"
                src="shoes2.png"
                style={{ height: "376px" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#FA5400",
                    fontSize: "16px",
                    fontWeight: "500px",
                  }}
                >
                  Sustainable Materials
                </Card.Title>
                <Card.Title
                  style={{
                    color: "#111111",
                    fontSize: "16px",
                    fontWeight: "500px",
                  }}
                >
                  Nike Air Max Dawn
                </Card.Title>
                <Card.Title
                  style={{
                    color: "#757575",
                    fontSize: "16px",
                    fontWeight: "500px",
                  }}
                >
                  Men's Shoes
                </Card.Title>
                <Card.Title
                  style={{
                    color: "#757575",
                    fontSize: "16px",
                    fontWeight: "500px",
                  }}
                >
                  4 colours
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#111111",
                    fontSize: "16px",
                    fontWeight: "500px",
                  }}
                >
                  AED 560
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}