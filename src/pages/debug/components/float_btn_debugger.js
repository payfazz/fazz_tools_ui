import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon } from "antd";
import { readLog } from "../../../actions/debug";

const FloatBtnDebugger = props => (
  <div className="float-btn-debugger">
    <a href="javascript:void(0)" onClick={props.onClick}>
      <div
        className={`float-btn-debugger__btn ${props.unreadLogCount === 0 &&
          "float-btn-debugger__btn--clear"}`}
      >
        <Icon
          type="file-exclamation"
          className="float-btn-debugger__btn__icon"
        />
        <p className="float-btn-debugger__btn__text">{`${
          props.unreadLogCount
        } New Log`}</p>
      </div>
    </a>
  </div>
);

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
