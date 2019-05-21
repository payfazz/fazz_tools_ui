import React, { Fragment, PureComponent } from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FloatBtnDebugger from "./components/float_btn_debugger";
import DebugItem from "./components/item";

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
          {this.props.logs.map(log => (
            <DebugItem key={log.id} {...log} />
          ))}
        </Drawer>
        <FloatBtnDebugger onClick={this.props.onVisibleChange} />
      </Fragment>
    );
  }
}

DebugPage.propTypes = {
  visible: PropTypes.bool.isRequired,
  onVisibleChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ debug: { logs } }) => ({
  logs
});

export default connect(mapStateToProps)(DebugPage);
