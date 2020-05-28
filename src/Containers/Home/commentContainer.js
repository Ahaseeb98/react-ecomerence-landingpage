import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Components from "./../../Components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ProductContainer() {
  return (
    <Container>
      {" "}
      <Row
        style={{
          width: "100wh",
          margin: 0,
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Col style={{ textAlign: "center" }}>
          <h2 className="m-0 sugestionHeader">
            CUSTOMERS <span className="sugestionHeaderSpan">LOVE</span>
          </h2>
          <span className="sugestionLable">What Peaple Say:</span>
        </Col>
      </Row>
      <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Components.CommentCard />
          <Components.CommentCard />
          <Components.CommentCard />
          <Components.CommentCard />
      </Row>
    </Container>
  );
}
