import React from "react";
import { Row, Col } from "react-bootstrap";
import {  FaSearch } from "react-icons/fa";

import "./style.css";
export default function TopNavbar() {
  return (
    <div className="topNavbar">
      <Row className="justify-content-md-center">
        <Col>
          <Row>
            <Col>
              <h3 className="topNavText">SPRY<span className="sugestionHeaderSpan">S</span>TORE</h3>
            </Col>
            <Col xs={8}>
              <h5 className="searchText"><FaSearch className="mr-2"/> Search here</h5>
            </Col>
          </Row>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <a href="#" className="navbarLink active">
            HOME
          </a>
          <a href="#" className="navbarLink">
            ABOUT
          </a>
          <a href="#" className="navbarLink">
            SHOPING
          </a>
          <a href="#" className="navbarLink">
            BLOG
          </a>
          <a href="#" className="navbarLink">
            CONTACT
          </a>
        </Col>
      </Row>
    </div>
  );
}
