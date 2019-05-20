import React, { Fragment, PureComponent } from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";
import FloatBtnDebugger from "./components/float_btn_debugger";

class DebugPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Drawer
          placement="right"
          closable={false}
          width={480}
          visible={this.props.visible}
          onClose={this.props.onVisibleChange}
        >
          <h1>helo</h1>
        </Drawer>
        <FloatBtnDebugger onClick={this._onVisibleChange} />
      </Fragment>
    );
  }
}

DebugPage.propTypes = {
  visible: PropTypes.bool.isRequired,
  onVisibleChange: PropTypes.func.isRequired
};

export default DebugPage;
