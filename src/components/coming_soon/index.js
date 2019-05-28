import React from "react";
import { Row, Col } from "antd";

const ComingSoon = () => (
  <Row type="flex" align="middle" justify="center">
    <Col>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/png/coming_soon.png`}
        alt="coming soon"
        width={200}
        height={200}
      />
      <h1>
        <b>Coming Soon</b>
      </h1>
    </Col>
  </Row>
);

export default ComingSoon;
