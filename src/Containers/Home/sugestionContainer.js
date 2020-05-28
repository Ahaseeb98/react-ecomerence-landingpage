import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Components from "./../../Components";
// import { Carousel } from "react-responsive-carousel";

import "./style.css";
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
          SHOP WITH <span className="sugestionHeaderSpan">US</span>
        </h2>
        <span className="sugestionLable">
          Handpicked Favourites just for you
        </span>
      </Col>
    </Row>
    <Row style={{ width: "100wh", margin: 0, textAlign: "center" }}>
        <Components.SugestionCard/>
        <Components.SugestionCard/>
        <Components.SugestionCard/>
        <Components.SugestionCard/>
    </Row>
  </Container>
);
}
