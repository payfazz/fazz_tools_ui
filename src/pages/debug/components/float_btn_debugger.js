import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon } from "antd";
import { readLog } from "../../../actions/debug";

class FloatBtnDebugger extends PureComponent {
  _onToggleDrawer = () => {
    this.props.onClick();
    this.props.readLog();
  };

  render() {
    return (
      <div className="float-btn-debugger">
        <a href="javascript:void(0)" onClick={this._onToggleDrawer}>
          <div
            className={`float-btn-debugger__btn ${this.props.unreadLogCount ===
              0 && "float-btn-debugger__btn--clear"}`}
          >
            <Icon
              type="file-exclamation"
              className="float-btn-debugger__btn__icon"
            />
            <p className="float-btn-debugger__btn__text">{`${
              this.props.unreadLogCount
            } New Log`}</p>
          </div>
        </a>
      </div>
    );
  }
}

FloatBtnDebugger.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = ({ debug: { logs, readLogCount } }) => ({
  unreadLogCount: logs.length - readLogCount
});

const mapDispatchToProps = {
  readLog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatBtnDebugger);
