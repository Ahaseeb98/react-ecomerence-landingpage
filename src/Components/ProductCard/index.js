import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Components from "./../../Components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { FaShoppingBag, FaUserAlt, FaRegEye } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { onAddCart } from "./../../store/actions/actions";
import store from "../../store"

import "./style.css";
export default function ProductCard() {
  const [boo, setboo] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <Col style={{ textAlign: "center" }} xs={12} sm={6} md={4} lg={4} xl={3} >
      <div className="productCard">
        <div
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
          onMouseEnter={() => setboo(true)}
          onMouseLeave={() => setboo(false)}
        >
          {boo && (
            <div
              style={{ flex: 1, transitionDuration: 0.2 }}
            >
              <div
                style={{
                  flex: 1,
                  height: "120px",
                  textAlign: "right",
                  justifyContent: "space-between",
                  paddingRight: 20,
                }}
              >
                <a href="#" className="productBtnIcon linkBtnHover">
                  <FaRegEye />
                </a>
                <br />
                <br />
                <br />
                <a href="#" className="productBtnIcon linkBtnHover">
                  <FaShoppingBag />
                </a>
              </div>
              <div className="cardFooter">
                <a href="#" onClick={() => store.dispatch(onAddCart({val: 2}))}>Add To Cart</a>
              </div>
            </div>
          )}
        </div>
        <p className="productTitle">Something</p>
        <span className="productPrice">
          <span className="lineThrough">$90.99 </span> $50.99
        </span>
      </div>
    </Col>
  );
}
