import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Components from "./../../Components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.css";

export default function CommentCard() {
  return (
    <Col xs={12} sm={6} md={6} lg={3} xl={3} >
      <div className="commentCard mt-2">
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "60px",
            marginBottom: -30,
          }}
        >
          ,,
        </h1>
        <span>
          Lorem Ispansum Is Simply Dummy Text Of The Printing. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </span>
      </div>
      <center>
        <div className="arrowDown"></div>
        <img
          className="commentImg"
          src="https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
          width="75px"
          height="75px"
        />
      </center>{" "}
    </Col>
  );
}
