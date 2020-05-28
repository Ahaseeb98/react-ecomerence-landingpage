import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
export default function ProductCard() {
  const [boo, setboo] = React.useState(false);
  return (
    <Col style={{ textAlign: "center" }} xs={12} sm={6} md={6} lg={3} xl={3}>
      <div>
        <center>
          {" "}
          <div
            onMouseEnter={() => setboo(true)}
            onMouseLeave={() => setboo(false)}
            className="imgBorderRadius"
            style={{
              backgroundImage:
                "url(" +
                "https://images.pexels.com/photos/34199/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "200px",
              height: "200px",
              paddingTop: 15,
            }}
          >
            {boo && (
              <div
                className="imgBorderRadius"
                style={{
                  backgroundColor: "#212529",
                  opacity: 0.5,
                  width: "170px",
                  height: "170px",
                }}
              >
                <br />
                <br />
                <br />
                <span
                  className="sugestionCardText"
                  style={{ marginTop: "85px", opacity: 1, color: "#fff" }}
                >
                  Something
                </span>
              </div>
            )}
          </div>
          <p className="sugestionCardText">Something</p>
        </center>
      </div>
    </Col>
  );
}
