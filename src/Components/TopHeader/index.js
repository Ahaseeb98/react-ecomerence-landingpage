import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHandPointRight, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { onAddCart, onRemoveCart } from "./../../store/actions/actions";
import store from "./../../store";

import "./style.css";
export default function TopHeader() {
  const [cart, setCart] = React.useState(false);
  const cartData = useSelector((state) => state.cart);
  console.log("CART_____", cartData.cart);
  return (
    <div className="topHeader">
      <Row>
        <Col>
          <p
            className="topHeaderText"
            style={{ letterSpacing: "0px", wordSpacing: "-1px" }}
          >
            UPTO 30% OFF ON ALL THE STYLES,{" "}
            <span className="topHeaderTextInner">Click Here For More</span>{" "}
            <FaHandPointRight />{" "}
            <a href="#" className="headerLink">
              More Details
            </a>
          </p>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <a href="#" className="linkBtnIcon linkBtnHover">
            <FaUserAlt />
          </a>
          <a
            href="#"
            className="linkBtn linkBtnHover"
            onClick={() => setCart(true)}
          >
            My Cart <FaShoppingCart />
          </a>
          <br />
          <br />
          <br />
          {cart && (
            <Row>
              <Col></Col>
              <Col xs={7}>
                <div className="card cart">
                  <div className="card-header">
                    <Row>
                      <Col className="text-left">
                        <h5 className="mt-1">Cart</h5>
                      </Col>
                      <Col
                        className="text-right"
                        onClick={() => setCart(false)}
                      >
                        <button className="btn btn-small" >X</button>
                      </Col>
                    </Row>

                    {cartData.cart.map((v, i) => {
                      return <Row className="cart-item">
                        <Col className="text-left" xs={7}>
                          <p>Men's Pink Shirt</p>
                        </Col>
                        <Col className="text-center">
                          <span
                            href="#"
                            className="cart-cancel"
                            onClick={() => store.dispatch(onRemoveCart(i))}
                          >
                            x
                          </span>
                        </Col>
                        <Col className="text-left" xs={3}>
                          <p>$599.99</p>
                        </Col>
                      </Row>;
                    })}
                
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
