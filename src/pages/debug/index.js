import React, { Fragment } from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FloatBtnDebugger from "./components/float_btn_debugger";
import DebugItem from "./components/item";
import NotFound from "../../components/not_found";

const _styleNoData = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const DebugPage = props => (
  <Fragment>
    <Drawer
      placement="right"
      closable={false}
      width={480}
      visible={props.visible}
      onClose={props.onVisibleChange}
      bodyStyle={props.logs.length === 0 ? _styleNoData : null}
    >
      {(() => {
        if (props.logs.length > 0) {
          return props.logs.map(log => <DebugItem key={log._id} {...log} />);
        }

        return <NotFound />;
      })()}
    </Drawer>
    <FloatBtnDebugger onClick={props.onVisibleChange} />
  </Fragment>
);

DebugPage.propTypes = {
  visible: PropTypes.bool.isRequired,
  onVisibleChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ debug: { logs } }) => ({
  logs
});

export default connect(mapStateToProps)(DebugPage);
