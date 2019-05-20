import React, { PureComponent, Fragment } from "react";
import { Layout, Row, Menu } from "antd";
import { connect } from "react-redux";
import { setTabSelected, openConnectionWS } from "../../actions/config";
import Header from "./header";
import DebugPage from "../../pages/debug";
import "../../styles/container.css";
import ConnectionInfo from "./connection_info";

class Container extends PureComponent {
  state = {
    visible: false,
    visibleModal: false
  };

  constructor() {
    super();
    this._defaultSelectedKeys = ["0"];
  }

  componentDidMount() {
    this.props.openConnectionWS();
  }

  _onVisibleChange = () => {
    this.setState(state => ({
      visible: !state.visible
    }));
  };

  get _renderMenuItem() {
    return this.props.children.map(({ props: { label, tabIndex } }) => (
      <Menu.Item key={tabIndex}>{label}</Menu.Item>
    ));
  }

  get _renderContent() {
    const Component = this.props.children.find(
      ({ props: { tabIndex } }) => tabIndex === this.props.tabSelected
    );

    return <Component.props.component />;
  }

  _onTabSelected = ({ key }) => {
    this.props.setTabSelected(key);
  };

  get _popOverContent() {
    return (
      <div>
        <p>Set Port</p>
        <p>About Us</p>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        {!this.props.isConnected && <ConnectionInfo />}
        <Layout>
          <Layout.Header className="header">
            <Header />
            <Row className="navbar">
              <Menu
                onClick={this._onTabSelected}
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={this._defaultSelectedKeys}
              >
                {this._renderMenuItem}
              </Menu>
            </Row>
          </Layout.Header>
          <Layout.Content className="content">
            {this._renderContent}
          </Layout.Content>
          <DebugPage
            visible={this.state.visible}
            onVisibleChange={this._onVisibleChange}
          />
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ config: { tabSelected, isConnected } }) => ({
  tabSelected,
  isConnected
});

const mapDispatchToProps = {
  setTabSelected,
  openConnectionWS
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
