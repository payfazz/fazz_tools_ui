import React from "react";
import { Row, Col } from "antd";

const Header = () => (
  <Row>
    <Col span={6}>
      <img
        className="header__logo"
        src={`${process.env.PUBLIC_URL}assets/images/jpg/payfazz.jpeg`}
        alt="payfazz logo"
      />
    </Col>
  </Row>
);

export default Header;
