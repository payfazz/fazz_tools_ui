import React from "react";
import PropTypes from "prop-types";

const FloatBtnDebugger = props => (
  <div className="float-btn-debugger">
    <a href="javascript:void(0)" onClick={props.onClick}>
      <div className="float-btn-debugger__btn">Console Debugger</div>
    </a>
  </div>
);
FloatBtnDebugger.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FloatBtnDebugger;
