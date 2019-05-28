import React from "react";
import { Row, Col } from "antd";

const NotFound = () => (
  <Row type="flex" justify="center" align="middle">
    <Col>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/svg/no_data.svg`}
        width={200}
        height={200}
        alt={"no data"}
      />
      <h1>
        <b>No Data Found ...</b>
      </h1>
    </Col>
  </Row>
);

export default NotFound;
