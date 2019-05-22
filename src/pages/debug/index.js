import React, { Fragment, PureComponent } from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { readLog } from "../../actions/debug";
import FloatBtnDebugger from "./components/float_btn_debugger";
import DebugItem from "./components/item";
import NotFound from "../../components/not_found";

const _styleNoData = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class DebugPage extends PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.logs.length < this.props.logs.length && this.props.visible) {
      this.props.readLog();
    }
  }

  _renderLogs = () => {
    if (this.props.logs.length > 0) {
      return this.props.logs.map(log => (
        <DebugItem id={log._id} key={log._id} {...log} />
      ));
    }

    return <NotFound />;
  };

  _onClick = () => {
    this.props.onVisibleChange();
    this.props.readLog();
  };

  render() {
    return (
      <Fragment>
        <Drawer
          placement="right"
          closable={false}
          width={480}
          visible={this.props.visible}
          onClose={this.props.onVisibleChange}
          bodyStyle={this.props.logs.length === 0 ? _styleNoData : null}
        >
          {this._renderLogs()}
        </Drawer>
        <FloatBtnDebugger onClick={this._onClick} />
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

const mapDispatchToProps = {
  readLog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebugPage);
