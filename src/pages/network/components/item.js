import React, { PureComponent } from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import JSONView from "react-json-view";
import "../../../styles/network.css";

class NetworkItem extends PureComponent {
  _renderRequestHeader = () => {
    const _components = [];
    for (const index in this.props.requestHeaders) {
      _components.push(
        <Row type="flex" key={index}>
          <Col className="container-network__item__section-body__key" span={4}>
            {index}
          </Col>
          <Col span={2}>:</Col>
          <Col span={18}>{this.props.requestHeaders[index]}</Col>
        </Row>
      );
    }

    return _components;
  };

  _renderRequestParams = () => {
    const _components = [];
    for (const index in this.props.params) {
      _components.push(
        <Row type="flex" key={index}>
          <Col className="container-network__item__section-body__key" span={4}>
            {index}
          </Col>
          <Col span={2}>:</Col>
          <Col span={18}>{this.props.params[index]}</Col>
        </Row>
      );
    }

    return _components;
  };

  _renderRequestBody = () => {
    const type = typeof this.props.body;
    if (type === "boolean" || type === "string" || type === "number") {
      return this.props.body;
    }

    return <JSONView src={this.props.body} />;
  };

  _renderResponseHeader = () => {
    const _components = [];
    for (const index in this.props.responseHeaders) {
      _components.push(
        <Row type="flex" key={index}>
          <Col className="container-network__item__section-body__key" span={4}>
            {index}
          </Col>
          <Col span={2}>:</Col>
          <Col span={18}>{this.props.responseHeaders[index]}</Col>
        </Row>
      );
    }

    return _components;
  };

  _renderResponseBody = () => {
    const type = typeof this.props.responseBody;
    if (type === "boolean" || type === "string" || type === "number") {
      return this.props.responseBody;
    }

    return <JSONView src={this.props.responseBody} />;
  };

  render() {
    return (
      <Row>
        <Col>
          <Col className="container-network__item__section-title">General</Col>
          <Col className="container-network__item__section-body">
            <Row type="flex">
              <Col
                className="container-network__item__section-body__key"
                span={4}
              >
                Url
              </Col>
              <Col span={2}>:</Col>
              <Col span={18}>{this.props.url}</Col>
            </Row>
            <Row type="flex">
              <Col
                className="container-network__item__section-body__key"
                span={4}
              >
                Status code
              </Col>
              <Col span={2}>:</Col>
              <Col span={18}>{this.props.statusCode}</Col>
            </Row>
          </Col>
        </Col>
        <Col>
          <Col className="container-network__item__section-title">
            Request Header
          </Col>
          <Col className="container-network__item__section-body">
            {this._renderRequestHeader()}
          </Col>
        </Col>
        <Col>
          <Col className="container-network__item__section-title">
            Request Params
          </Col>
          <Col className="container-network__item__section-body">
            {this._renderRequestParams()}
          </Col>
        </Col>
        <Col>
          <Col className="container-network__item__section-title">
            Request Body
          </Col>
          <Col className="container-network__item__section-body">
            <Row type="flex">{this._renderRequestBody()}</Row>
          </Col>
        </Col>
        <Col>
          <Col className="container-network__item__section-title">
            Response Header
          </Col>
          <Col className="container-network__item__section-body">
            {this._renderResponseHeader()}
          </Col>
        </Col>
        <Col>
          <Col className="container-network__item__section-title">
            Response Body
          </Col>
          <Col className="container-network__item__section-body">
            <Row type="flex">{this._renderResponseBody()}</Row>
          </Col>
        </Col>
      </Row>
    );
  }
}

NetworkItem.propTypes = {
  url: PropTypes.string.isRequired,
  requestHeaders: PropTypes.object.isRequired,
  responseHeaders: PropTypes.object.isRequired,
  method: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  body: PropTypes.any,
  responseBody: PropTypes.any,
  statusCode: PropTypes.number.isRequired,
  isError: PropTypes.bool.isRequired
};

export default NetworkItem;
