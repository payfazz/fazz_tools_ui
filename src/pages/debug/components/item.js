import React, { PureComponent } from "react";
import { Row, Col, Divider, Table } from "antd";
import JSONView from "react-json-view";
import PropTypes from "prop-types";
import moment from "moment";
import LogDisplay from "../../../value/log_display";
import "../../../styles/debug.css";

class DebugItem extends PureComponent {
  constructor(props) {
    super(props);
    this.colorStyle = {
      color: props.options.color
    };

    this._columns = [
      {
        title: "Index",
        rowKey: "index",
        key: "index",
        dataIndex: "index"
      },
      {
        title: "Data Type",
        rowKey: "type",
        key: "type",
        dataIndex: "type"
      },
      {
        title: "Value",
        key: "value",
        rowKey: "value",
        name: "Value",
        dataIndex: "value",
        render: data => {
          if (this._isArray(data)) {
            return <JSONView src={data} />;
          }

          return data;
        }
      }
    ];

    this._createDataSource();
  }

  _isArray = data => typeof data === "object" && Array.isArray(data);

  _createDataSource = () => {
    const exlcludeTypes = ["string", "number", "boolean"];
    const type = typeof this.props.text;
    if (exlcludeTypes.indexOf(type) > -1) {
      this._dataSource = [
        {
          index: "-",
          type,
          key: this.props._id,
          value: this.props.text
        }
      ];

      return;
    }

    if (this._isArray(this.props.text)) {
      this._dataSource = [
        {
          index: "-",
          type: "array",
          key: this.props._id,
          value: this.props.text
        }
      ];

      return;
    }

    this._dataSource = [];
    const now = new Date().getTime();
    for (let index in this.props.text) {
      this._dataSource = this._dataSource.concat([
        {
          index,
          key: `${this.props._id}_${now}`,
          type: (() => {
            if (this._isArray(this.props.text[index])) {
              return "array";
            }

            return typeof this.props.text[index];
          })(),
          value: this.props.text[index]
        }
      ]);
    }
  };

  _displayAsPlainText = () => {
    if (typeof this.props.text === "object") {
      return <JSONView src={this.props.text} />;
    }

    return <p>{this.props.text}</p>;
  };

  _displayAsTable = () => {
    return (
      <Table
        columns={this._columns}
        dataSource={this._dataSource}
        pagination={false}
        bordered={true}
      />
    );
  };

  render() {
    return (
      <Row>
        {this.props.options.prefix !== "" && (
          <Col>
            <p className="debug-p" style={this.colorStyle}>
              {this.props.options.prefix}
            </p>
          </Col>
        )}
        {(() => {
          if (this.props.showAs === LogDisplay.plainText) {
            return this._displayAsPlainText();
          }

          if (this.props.showAs === LogDisplay.table) {
            return this._displayAsTable();
          }

          return null;
        })()}
        {this.props.options.suffix !== "" && (
          <Col>
            <p className="debug-p" style={this.colorStyle}>
              {this.props.options.suffix}
            </p>
          </Col>
        )}
        {this.props.options.showTimestamp && (
          <Col>
            <p
              className="debug-p"
              style={this.colorStyle}
            >{`Log Time: ${moment().format("YYYY-MM-DD HH:mm:ss")}`}</p>
          </Col>
        )}
        <Divider />
      </Row>
    );
  }
}

DebugItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  showAs: PropTypes.string.isRequired,
  options: PropTypes.shape({
    color: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    showTimestamp: PropTypes.bool
  })
};

export default DebugItem;
