import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import "../../../styles/network.css";

const NetworkItemHeader = ({ url, statusCode, method, isError }) => (
  <Row type="flex">
    <Col span={4}>
      <p
        className={`container-network__item__header-text ${
          isError ? "container-network__item__header-text--error" : ""
        }`}
      >
        <b>{`${method}   ${statusCode}`}</b>
      </p>
    </Col>
    <Col span={20}>
      <p
        className={`container-network__item__header-text ${
          isError ? "container-network__item__header-text--error" : ""
        }`}
      >
        {url}
      </p>
    </Col>
  </Row>
);

NetworkItemHeader.propTypes = {
  url: PropTypes.string.isRequired,
  statusCode: PropTypes.number.isRequired,
  method: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired
};

export default NetworkItemHeader;
