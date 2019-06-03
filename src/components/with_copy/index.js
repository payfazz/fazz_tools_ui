import React, { PureComponent, Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";
import "../../styles/with_copy.css";

class WithCopy extends PureComponent {
  render() {
    return (
      <Fragment>
        <span>{this.props.text}</span>
        <CopyToClipboard text={this.props.text}>
          <div className="object-meta-data container-with-copy">
            <span className="copy-to-clipboard-container">
              <span className="container-with-copy__cursor">
                <span className="copy-icon">
                  <svg
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                    className="container-with-copy__cursor__svg"
                  >
                    <g>
                      <path d="m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" />
                    </g>
                  </svg>
                </span>
              </span>
            </span>
          </div>
        </CopyToClipboard>
      </Fragment>
    );
  }
}

WithCopy.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
};

export default WithCopy;
