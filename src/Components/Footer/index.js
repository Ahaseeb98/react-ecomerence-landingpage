import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaTwitter , FaGooglePlus, FaCcVisa, FaCcMastercard, FaCcPaypal} from "react-icons/fa";

import "./style.css";
export default function Footer() {
  return (
    <div
      style={{ width: "100wh", marginTop: "20px", backgroundColor: "#232020" }}
    >
      <Container className="p-3 pt-5">
        {" "}
        <Row>
          <Col className="text-light">
            <h3 className="text-light">
              SPRY<span className="sugestionHeaderSpan">S</span>TORE
            </h3>
            <span className="footerText">
              Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
              sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo
              non suscipit.
            </span>
            <br />
            <br />
            <a href="#" className="footerBtnIcon linkBtnHover">
              <FaInstagram />
            </a>{" "}
            <a href="#" className="footerBtnIcon linkBtnHover">
              <FaFacebook />
            </a>{" "}
            <a href="#" className="footerBtnIcon linkBtnHover">
              <FaTwitter />
            </a>{" "}
            <a href="#" className="footerBtnIcon linkBtnHover">
              <FaGooglePlus />
            </a>{" "}
          </Col>
          <Col className="text-light" xs={8}>
            <h2 className="text-light">
              Women's Day Special Offer All Branded Sandals are Flat 50%
              Discount
            </h2>

            <br />
            <Row className="footerLinks">
              <Col>
                <h5>USEFUL LINKS</h5>
                <Row>
                  <Col>
                    <p>
                      <a href="#">Home</a>
                    </p>
                    <p>
                      <a href="#">About</a>
                    </p>
                    <p>
                      <a href="#">Blog</a>
                    </p>
                    <p>
                      <a href="#">Contact</a>
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <a href="#">Careers</a>
                    </p>
                    <p>
                      <a href="#">Privacy Policy</a>
                    </p>
                    <p>
                      <a href="#">Terms & Conditions</a>
                    </p>
                    <p>
                      <a href="#">Support</a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <h5>OUR STORES</h5>
                    <p className="mt-2 footerText">
                      49436 Broaddus Honey Court Avenue, Madisonville KY 95020,
                      United States of America
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>WE ACCEPT:</h5>
                    <FaCcVisa className="payIcons"/>
                    <FaCcMastercard className="payIcons"/>
                    <FaCcPaypal className="payIcons"/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <hr style={{ backgroundColor: "lightgray" }} />
        <Row className=" footerLinks">
          <Col>
            <a href="#" className="ml-3">
              Privacy Policy
            </a>
            <a href="#" className="ml-3">
              Terms of Service
            </a>
            <a href="#" className="ml-3">
              Customer Care
            </a>
          </Col>

          <Col className="text-right">
            <p className="footerText">
              © 2020 SpryStore. All rights reserved. Design by{" "}
              <a href="#">W3Layouts</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
