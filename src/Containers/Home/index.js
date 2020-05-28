import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Components from "./../../Components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductContainer from "./productContainer";
import SugestionContainer from "./sugestionContainer";
import CommentContainer from "./commentContainer";
import "./style.css";
export default function Home() {
  return (
    <div>
      <Components.TopHeader />
      <Components.TopNavbar />
      <Row style={{ height: "100vh", width: "100wh", margin: 0 }}>
        <Col style={{ backgroundColor: "gray" }} className="m-0 p-0">
          <Carousel showThumbs={false} showStatus={false} useKeyboardArrows>
            <div>
              <img src="https://images.pexels.com/photos/4354389/pexels-photo-4354389.jpeg" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4354389/pexels-photo-4354389.jpeg" />
            </div>
          </Carousel>
        </Col>
        <Col
          style={{ backgroundColor: "lightgray" }}
          className="m-0 p-0"
          xs={4}
        >
          <img
            src="https://images.pexels.com/photos/4275561/pexels-photo-4275561.jpeg"
            width="100%"
          />
        </Col>
      </Row>
      <br />
      <br />
      <SugestionContainer />
 
      <ProductContainer />
      <CommentContainer/>
      <Components.Footer />
    </div>
  );
}
