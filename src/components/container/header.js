import React, { PureComponent } from "react";
import { Row, Col, Popover, Button } from "antd";

class Header extends PureComponent {
  get _popOverContent() {
    return (
      <div>
        <p>Set Port Connection</p>
        <p>About Us</p>
      </div>
    );
  }

  render() {
    return (
      <Row>
        <Col span={6}>
          <img
            className="header__logo"
            src={`${process.env.PUBLIC_URL}assets/images/jpg/payfazz.jpeg`}
            alt="payfazz logo"
          />
        </Col>
        <Col span={18} className="header__content-right">
          <Popover
            placement="bottomLeft"
            trigger="click"
            content={this._popOverContent}
          >
            <Button type="ghost" shape="circle" icon="setting" />
          </Popover>
        </Col>
      </Row>
    );
  }
}

export default Header;
