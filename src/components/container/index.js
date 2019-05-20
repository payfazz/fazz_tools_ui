import React, { PureComponent } from "react";
import { Layout, Row, Menu, Col, Icon, Drawer, Popover } from "antd";
import { connect } from "react-redux";
import FloatBtnDebugger from "./float_btn_debugger";
import { setTabSelected } from "../../actions/config";
import "../../styles/template.css";

class Container extends PureComponent {
  state = {
    visible: false
  };

  constructor() {
    super();
    this._defaultSelectedKeys = ["0"];
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

  render() {
    return (
      <Layout>
        <Layout.Header className="header">
          <Row>
            <Col span={6}>
              <img
                className="header__logo"
                src="https://www.payfazz.com/wp-content/uploads/2017/03/Icon-Payfazz.jpeg"
              />
            </Col>
            <Col span={18} className="header__content-right">
              <Popover placement="topRight" trigger="click">
                <Icon
                  type="setting"
                  className="header__content-right__icon-setting"
                />
              </Popover>
            </Col>
          </Row>
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
        <FloatBtnDebugger onClick={this._onVisibleChange} />
        <Drawer
          title="Console Debugger"
          placement="right"
          closable={false}
          width={480}
          visible={this.state.visible}
          onClose={this._onVisibleChange}
        >
          <h1>helo</h1>
        </Drawer>
      </Layout>
    );
  }
}

const mapStateToProps = ({ config: { tabSelected } }) => ({
  tabSelected
});

const mapDispatchToProps = {
  setTabSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
