import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Collapse, Icon } from "antd";
import NotFound from "../../components/not_found";
import NetworkItem from "./components/item";
import "../../styles/network.css";
import NetworkItemHeader from "./components/header";

class NetworkPage extends PureComponent {
  constructor(props) {
    super(props);
    if (this.props.networks.length > 0) {
      this._defaultActiveKey = [props.networks[0]._id];
    }

    this._defaultActiveKey = [];
  }

  _showExpandIcon = ({ isActive }) => (
    <Icon type="caret-right" rotate={isActive ? 90 : 0} />
  );

  render() {
    if (this.props.networks.length === 0) {
      return (
        <div className="container-network--nodata">
          <NotFound />
        </div>
      );
    }

    return (
      <Collapse
        bordered={false}
        defaultActiveKey={this._defaultActiveKey}
        expandIcon={this._showExpandIcon}
      >
        {this.props.networks.map(network => (
          <Collapse.Panel
            className="container-network__item"
            header={<NetworkItemHeader {...network.text} />}
            key={network._id}
          >
            <NetworkItem {...network.text} />
          </Collapse.Panel>
        ))}
      </Collapse>
    );
  }
}

const mapStateToProps = ({ debug: { networks } }) => ({
  networks
});

export default connect(mapStateToProps)(NetworkPage);
