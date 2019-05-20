import React from "react";
import PropTypes from "prop-types";

const ContainerItem = ({ Component }) => <Component />;

ContainerItem.propTypes = {
  component: PropTypes.any.isRequired,
  tabIndex: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ContainerItem;
